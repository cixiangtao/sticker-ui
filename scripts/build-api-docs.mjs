/* global URL, console, process */
import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { format } from "oxfmt"
import { Node, Project, VariableDeclarationKind } from "ts-morph"

const ROOT_DIR = path.resolve(fileURLToPath(new URL("..", import.meta.url)))
const REGISTRY_PATH = path.join(ROOT_DIR, "registry.json")
const OUTPUT_PATH = path.join(
  ROOT_DIR,
  "src",
  "generated",
  "preview-api-docs.json",
)
const SOURCE_ROOT = path.join(ROOT_DIR, "src", "components", "ui")

const API_TYPE_NAME_PATTERN =
  /(Props|Rule|Instance|Values|Value|Layout|Status|ErrorInfo|NamePath|Error)$/
const COMMON_INHERITED_PROP_NAMES = [
  "aria-describedby",
  "aria-invalid",
  "aria-label",
  "aria-labelledby",
  "autoComplete",
  "autoFocus",
  "checked",
  "children",
  "className",
  "defaultChecked",
  "defaultValue",
  "disabled",
  "form",
  "htmlFor",
  "id",
  "max",
  "maxLength",
  "min",
  "minLength",
  "name",
  "onBlur",
  "onChange",
  "onClick",
  "onFocus",
  "onKeyDown",
  "onKeyUp",
  "onMouseEnter",
  "onMouseLeave",
  "pattern",
  "placeholder",
  "readOnly",
  "required",
  "role",
  "style",
  "title",
  "type",
  "value",
]
const COMMON_INHERITED_PROP_NAME_SET = new Set(COMMON_INHERITED_PROP_NAMES)
const COMMON_INHERITED_PROP_DESCRIPTIONS = {
  "aria-describedby": "Identifies elements that describe the control.",
  "aria-invalid": "Indicates whether the current value is invalid.",
  "aria-label": "Provides an accessible label when visible text is not enough.",
  "aria-labelledby": "Identifies elements that label the control.",
  autoComplete: "Controls browser autocomplete behavior.",
  autoFocus: "Focuses the element when it mounts.",
  checked: "Controls the checked state.",
  children: "Content rendered inside the element.",
  className: "Adds custom class names to the root element.",
  defaultChecked: "Sets the initial unchecked or checked state.",
  defaultValue: "Sets the initial uncontrolled value.",
  disabled: "Disables user interaction with the element.",
  form: "Associates the control with a form by id.",
  htmlFor: "Associates the label with a form control id.",
  id: "Sets the element id.",
  max: "Sets the maximum accepted value.",
  maxLength: "Sets the maximum text length.",
  min: "Sets the minimum accepted value.",
  minLength: "Sets the minimum text length.",
  name: "Sets the form field name.",
  onBlur: "Runs when the element loses focus.",
  onChange: "Runs when the value changes.",
  onClick: "Runs when the element is clicked.",
  onFocus: "Runs when the element receives focus.",
  onKeyDown: "Runs when a key is pressed.",
  onKeyUp: "Runs when a key is released.",
  onMouseEnter: "Runs when the pointer enters the element.",
  onMouseLeave: "Runs when the pointer leaves the element.",
  pattern: "Sets a validation pattern for the value.",
  placeholder: "Shows placeholder text when the field is empty.",
  readOnly: "Prevents user edits while keeping the value readable.",
  required: "Marks the field as required for native validation.",
  role: "Sets the ARIA role.",
  style: "Adds inline styles to the root element.",
  title: "Sets advisory text for the element.",
  type: "Sets the native control type.",
  value: "Controls the current value.",
}

function cleanText(value) {
  return value.replaceAll(/\r?\n/g, " ").replaceAll(/\s+/g, " ").trim()
}

async function formatJson(fileName, value) {
  const result = await format(fileName, JSON.stringify(value))

  if (result.errors.length > 0) {
    throw new Error(result.errors.map((error) => error.message).join("\n"))
  }

  return result.code
}

function getApiI18nKey(...segments) {
  return ["api", ...segments.map(toI18nKeySegment)].join(".")
}

function getPropertyName(nameNode) {
  if (Node.isIdentifier(nameNode) || Node.isStringLiteral(nameNode)) {
    return nameNode.getText().replaceAll(/^["']|["']$/g, "")
  }

  return nameNode.getText()
}

function toI18nKeySegment(value) {
  return String(value)
    .replaceAll(/[^A-Za-z0-9_-]+/g, "_")
    .replaceAll(/^_+|_+$/g, "")
}

function getJsDocNode(node) {
  if (typeof node.getJsDocs === "function") {
    return node.getJsDocs().at(-1)
  }

  if (Node.isVariableDeclaration(node)) {
    const statement = node.getVariableStatement()

    return statement?.getJsDocs().at(-1)
  }

  return undefined
}

function readJsDoc(node) {
  const jsDoc = getJsDocNode(node)

  if (!jsDoc) {
    return {}
  }

  const tags = {}

  for (const tag of jsDoc.getTags()) {
    const name = tag.getTagName()
    const comment =
      typeof tag.getCommentText === "function"
        ? tag.getCommentText()
        : tag.getComment()

    tags[name] = cleanText(comment ?? "")
  }

  return {
    defaultValue: tags.default,
    deprecated: tags.deprecated,
    description: cleanText(jsDoc.getDescription().trim()),
    remarks: tags.remarks,
  }
}

function withI18nTextFields(doc, keyBase) {
  return {
    defaultValue: doc.defaultValue,
    deprecated: doc.deprecated,
    deprecatedKey: doc.deprecated ? `${keyBase}.deprecated` : undefined,
    description: doc.description,
    descriptionKey: doc.description ? `${keyBase}.description` : undefined,
    remarks: doc.remarks,
    remarksKey: doc.remarks ? `${keyBase}.remarks` : undefined,
  }
}

function getTypeText(member) {
  const typeNode = member.getTypeNode()

  if (typeNode) {
    return cleanText(typeNode.getText())
  }

  return cleanText(member.getType().getText(member))
}

function getResolvedTypeText(symbol, location) {
  return cleanText(symbol.getTypeAtLocation(location).getText(location))
    .replaceAll(/\s*\|\s*undefined/g, "")
    .replaceAll(/undefined\s*\|\s*/g, "")
}

function getHeritage(interfaceDeclaration) {
  return interfaceDeclaration
    .getExtends()
    .map((heritage) => cleanText(heritage.getText()))
}

function getTypeAliasHeritage(typeAlias) {
  const typeNode = typeAlias.getTypeNode()

  if (!typeNode || !Node.isIntersectionTypeNode(typeNode)) {
    return []
  }

  return typeNode
    .getTypeNodes()
    .filter((node) => !Node.isTypeLiteral(node))
    .map((node) => cleanText(node.getText()))
}

function getLocalTypeDeclaration(sourceFile, name) {
  return sourceFile.getInterface(name) ?? sourceFile.getTypeAlias(name)
}

function getPropsApiFromTypeText(sourceFile, typeText, keyBase) {
  const localType = getLocalTypeDeclaration(sourceFile, typeText)

  if (localType) {
    return getPropsApiFromLocalType(localType, keyBase)
  }

  return {
    inherits: [],
    members: [],
    type: typeText,
  }
}

function getPropsApiFromLocalType(declaration, keyBase) {
  const doc = readJsDoc(declaration)
  const ownMembers = Node.isInterfaceDeclaration(declaration)
    ? getMembersFromInterface(declaration, keyBase)
    : getMembersFromTypeAlias(declaration, keyBase)
  const inheritedMembers = getInheritedMembersFromResolvedType(
    declaration,
    ownMembers,
  )

  if (Node.isInterfaceDeclaration(declaration)) {
    return {
      ...withI18nTextFields(doc, keyBase),
      inherits: getHeritage(declaration),
      inheritedMembers,
      members: ownMembers,
      type: declaration.getName(),
    }
  }

  return {
    ...withI18nTextFields(doc, keyBase),
    inherits: getTypeAliasHeritage(declaration),
    inheritedMembers,
    members: ownMembers,
    type: declaration.getName(),
  }
}

function getPropertyRequirement(property) {
  const optional = property.hasQuestionToken()

  return {
    optional,
    required: !optional,
  }
}

function getPropsTypeFromCallable(declaration) {
  const parameter = declaration.getParameters().at(0)
  const typeNode = parameter?.getTypeNode()

  return typeNode ? cleanText(typeNode.getText()) : undefined
}

function getPropsTypeFromObjectAssign(sourceFile, callExpression) {
  const base = callExpression.getArguments().at(0)

  if (!Node.isIdentifier(base)) {
    return undefined
  }

  const baseDeclaration =
    sourceFile.getFunction(base.getText()) ??
    sourceFile.getVariableDeclaration(base.getText())

  return baseDeclaration
    ? getPropsTypeFromComponentDeclaration(sourceFile, baseDeclaration)
    : undefined
}

function getPropsTypeFromComponentDeclaration(sourceFile, declaration) {
  if (Node.isFunctionDeclaration(declaration)) {
    return getPropsTypeFromCallable(declaration)
  }

  if (!Node.isVariableDeclaration(declaration)) {
    return undefined
  }

  const initializer = declaration.getInitializer()

  if (!initializer) {
    return undefined
  }

  if (
    Node.isArrowFunction(initializer) ||
    Node.isFunctionExpression(initializer)
  ) {
    return getPropsTypeFromCallable(initializer)
  }

  if (!Node.isCallExpression(initializer)) {
    return `React.ComponentPropsWithoutRef<typeof ${cleanText(initializer.getText())}>`
  }

  const expressionText = initializer.getExpression().getText()

  if (expressionText === "Object.assign") {
    return getPropsTypeFromObjectAssign(sourceFile, initializer)
  }

  if (
    expressionText === "React.forwardRef" ||
    expressionText === "forwardRef"
  ) {
    const propsType = initializer.getTypeArguments().at(1)

    return propsType ? cleanText(propsType.getText()) : undefined
  }

  return undefined
}

function isComponentExportName(name) {
  return /^[A-Z]/.test(name)
}

function isComponentDeclaration(name, declaration) {
  if (!isComponentExportName(name)) {
    return false
  }

  return (
    Node.isFunctionDeclaration(declaration) ||
    Node.isVariableDeclaration(declaration)
  )
}

function getMembersFromInterface(interfaceDeclaration, keyBase) {
  return interfaceDeclaration
    .getProperties()
    .map((property) => {
      const name = getPropertyName(property.getNameNode())
      const doc = readJsDoc(property)

      return {
        ...withI18nTextFields(
          doc,
          `${keyBase}.members.${toI18nKeySegment(name)}`,
        ),
        name,
        ...getPropertyRequirement(property),
        type: getTypeText(property),
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

function getMembersFromTypeAlias(typeAlias, keyBase) {
  const typeNode = typeAlias.getTypeNode()
  const typeLiteral = Node.isTypeLiteral(typeNode)
    ? typeNode
    : Node.isIntersectionTypeNode(typeNode)
      ? typeNode.getTypeNodes().find((node) => Node.isTypeLiteral(node))
      : undefined

  if (!typeLiteral) {
    return []
  }

  return typeLiteral
    .getMembers()
    .filter(Node.isPropertySignature)
    .map((property) => {
      const name = getPropertyName(property.getNameNode())
      const doc = readJsDoc(property)

      return {
        ...withI18nTextFields(
          doc,
          `${keyBase}.members.${toI18nKeySegment(name)}`,
        ),
        name,
        ...getPropertyRequirement(property),
        type: getTypeText(property),
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

function getInheritedMembersFromResolvedType(declaration, ownMembers) {
  const ownNames = new Set(ownMembers.map((member) => member.name))

  return declaration
    .getType()
    .getProperties()
    .filter((symbol) => {
      const name = symbol.getName()

      return (
        !ownNames.has(name) &&
        COMMON_INHERITED_PROP_NAME_SET.has(name) &&
        symbol.getDeclarations().length > 0
      )
    })
    .map((symbol) => {
      const name = symbol.getName()
      const optional =
        typeof symbol.isOptional === "function" ? symbol.isOptional() : true

      return {
        description: COMMON_INHERITED_PROP_DESCRIPTIONS[name],
        name,
        optional,
        required: !optional,
        type: getResolvedTypeText(symbol, declaration),
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

function getObjectProperty(objectLiteral, propertyName) {
  return objectLiteral
    .getProperties()
    .find(
      (property) =>
        Node.isPropertyAssignment(property) &&
        getPropertyName(property.getNameNode()) === propertyName,
    )
}

function getStringLiteralValue(node) {
  if (
    Node.isStringLiteral(node) ||
    Node.isNoSubstitutionTemplateLiteral(node)
  ) {
    return node.getLiteralText()
  }

  return cleanText(node.getText())
}

function getObjectKeys(objectLiteral) {
  return objectLiteral
    .getProperties()
    .filter(Node.isPropertyAssignment)
    .map((property) => getPropertyName(property.getNameNode()))
    .sort((a, b) => a.localeCompare(b))
}

function getVariantGroups(sourceFile, itemName) {
  return sourceFile
    .getVariableDeclarations()
    .map((declaration) => {
      const initializer = declaration.getInitializer()

      if (!Node.isCallExpression(initializer)) {
        return undefined
      }

      if (initializer.getExpression().getText() !== "cva") {
        return undefined
      }

      const config = initializer.getArguments().at(1)

      if (!Node.isObjectLiteralExpression(config)) {
        return undefined
      }

      const variantsProperty = getObjectProperty(config, "variants")
      const variantsInitializer = variantsProperty?.getInitializer()

      if (!Node.isObjectLiteralExpression(variantsInitializer)) {
        return undefined
      }

      const defaultVariantsProperty = getObjectProperty(
        config,
        "defaultVariants",
      )
      const defaultVariantsInitializer =
        defaultVariantsProperty?.getInitializer()
      const defaultVariants = Node.isObjectLiteralExpression(
        defaultVariantsInitializer,
      )
        ? Object.fromEntries(
            defaultVariantsInitializer
              .getProperties()
              .filter(Node.isPropertyAssignment)
              .map((property) => [
                getPropertyName(property.getNameNode()),
                getStringLiteralValue(property.getInitializerOrThrow()),
              ]),
          )
        : {}

      const groups = variantsInitializer
        .getProperties()
        .filter(Node.isPropertyAssignment)
        .map((property) => {
          const name = getPropertyName(property.getNameNode())
          const valuesInitializer = property.getInitializer()
          const values = Node.isObjectLiteralExpression(valuesInitializer)
            ? getObjectKeys(valuesInitializer)
            : []

          return {
            defaultValue: defaultVariants[name],
            name,
            values,
          }
        })
        .sort((a, b) => a.name.localeCompare(b.name))

      const name = declaration.getName()
      const doc = readJsDoc(declaration)

      return {
        ...withI18nTextFields(doc, getApiI18nKey(itemName, "variants", name)),
        groups,
        name,
      }
    })
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name))
}

function getComponentApis(sourceFile, itemName) {
  return Array.from(sourceFile.getExportedDeclarations().entries())
    .map(([name, declarations]) => {
      const declaration = declarations.at(0)

      if (!declaration || !isComponentDeclaration(name, declaration)) {
        return undefined
      }

      const keyBase = getApiI18nKey(itemName, "components", name)
      const doc = readJsDoc(declaration)
      const propsType = getPropsTypeFromComponentDeclaration(
        sourceFile,
        declaration,
      )

      return {
        ...withI18nTextFields(doc, keyBase),
        name,
        props: propsType
          ? getPropsApiFromTypeText(sourceFile, propsType, `${keyBase}.props`)
          : undefined,
      }
    })
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name))
}

function getExportKind(name, declaration) {
  if (Node.isInterfaceDeclaration(declaration)) {
    return "interface"
  }

  if (Node.isTypeAliasDeclaration(declaration)) {
    return "type"
  }

  if (Node.isFunctionDeclaration(declaration) && isComponentExportName(name)) {
    return "component"
  }

  if (Node.isVariableDeclaration(declaration)) {
    if (declaration.getName().endsWith("Variants")) {
      return "variant"
    }

    if (isComponentDeclaration(name, declaration)) {
      return "component"
    }
  }

  return "value"
}

function getExports(sourceFile, itemName) {
  return Array.from(sourceFile.getExportedDeclarations().entries())
    .map(([name, declarations]) => {
      const declaration = declarations.at(0)
      const doc = declaration ? readJsDoc(declaration) : {}

      return {
        ...withI18nTextFields(doc, getApiI18nKey(itemName, "exports", name)),
        kind: declaration ? getExportKind(name, declaration) : "value",
        name,
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

function shouldIncludeType(name, exportedNames, doc) {
  return Boolean(
    exportedNames.has(name) ||
    doc.description ||
    API_TYPE_NAME_PATTERN.test(name),
  )
}

function getTypes(sourceFile, itemName) {
  const exportedNames = new Set(sourceFile.getExportedDeclarations().keys())

  const interfaces = sourceFile.getInterfaces().map((interfaceDeclaration) => {
    const doc = readJsDoc(interfaceDeclaration)
    const name = interfaceDeclaration.getName()
    const keyBase = getApiI18nKey(itemName, "types", name)

    if (!shouldIncludeType(name, exportedNames, doc)) {
      return undefined
    }

    return {
      ...withI18nTextFields(doc, keyBase),
      inherits: getHeritage(interfaceDeclaration),
      kind: "interface",
      members: getMembersFromInterface(interfaceDeclaration, keyBase),
      name,
    }
  })

  const typeAliases = sourceFile.getTypeAliases().map((typeAlias) => {
    const doc = readJsDoc(typeAlias)
    const name = typeAlias.getName()
    const keyBase = getApiI18nKey(itemName, "types", name)

    if (!shouldIncludeType(name, exportedNames, doc)) {
      return undefined
    }

    return {
      ...withI18nTextFields(doc, keyBase),
      inherits: getTypeAliasHeritage(typeAlias),
      kind: "type",
      members: getMembersFromTypeAlias(typeAlias, keyBase),
      name,
      type: cleanText(typeAlias.getTypeNodeOrThrow().getText()),
    }
  })

  return [...interfaces, ...typeAliases]
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name))
}

function validateSourceFile(sourceFile, item) {
  const exportAssignments = sourceFile.getExportAssignments()

  if (exportAssignments.length > 0) {
    throw new Error(
      `Unsupported default export in registry API source for ${item.name}`,
    )
  }

  const variableStatements = sourceFile.getVariableStatements()

  for (const statement of variableStatements) {
    const declarations = statement.getDeclarationList().getDeclarations()
    const declarationKind = statement.getDeclarationKind()

    if (
      declarationKind !== VariableDeclarationKind.Const &&
      declarations.some((declaration) =>
        declaration.getName().toLowerCase().includes("variant"),
      )
    ) {
      throw new Error(
        `Variant declarations must be const in registry API source for ${item.name}`,
      )
    }
  }
}

async function main() {
  const registry = JSON.parse(await readFile(REGISTRY_PATH, "utf8"))
  const project = new Project({
    skipAddingFilesFromTsConfig: true,
    tsConfigFilePath: path.join(ROOT_DIR, "tsconfig.json"),
  })

  const docs = {}

  for (const item of registry.items) {
    if (item.type !== "registry:ui") {
      continue
    }

    const file = item.files?.find((entry) => entry.type === "registry:ui")

    if (!file?.path) {
      throw new Error(`Missing registry UI source for ${item.name}`)
    }

    const sourcePath = path.join(ROOT_DIR, file.path)

    if (!sourcePath.startsWith(SOURCE_ROOT)) {
      throw new Error(
        `Unexpected registry UI path for ${item.name}: ${file.path}`,
      )
    }

    const sourceFile = project.addSourceFileAtPath(sourcePath)

    validateSourceFile(sourceFile, item)

    docs[item.name] = {
      components: getComponentApis(sourceFile, item.name),
      description: item.description,
      descriptionKey: getApiI18nKey(item.name, "description"),
      exports: getExports(sourceFile, item.name),
      name: item.name,
      sourcePath: file.path,
      title: item.title,
      types: getTypes(sourceFile, item.name),
      variants: getVariantGroups(sourceFile, item.name),
    }
  }

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true })
  await writeFile(OUTPUT_PATH, await formatJson(OUTPUT_PATH, docs))

  console.log(
    `Generated API docs for ${Object.keys(docs).length} components at ${path.relative(
      ROOT_DIR,
      OUTPUT_PATH,
    )}`,
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
