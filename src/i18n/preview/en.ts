import { type PreviewLanguageMessages } from "./messages"

const EN_PREVIEW_MESSAGE_OVERRIDES = {
  "api.common.inheritedProps.aria-describedby.description":
    "Identifies elements that describe the control.",
  "api.common.inheritedProps.aria-invalid.description":
    "Indicates whether the current value is invalid.",
  "api.common.inheritedProps.aria-label.description":
    "Provides an accessible name when visible text is not enough.",
  "api.common.inheritedProps.aria-labelledby.description":
    "Identifies elements that label the control.",
  "api.common.inheritedProps.autoComplete.description":
    "Controls browser autocomplete behavior.",
  "api.common.inheritedProps.autoFocus.description":
    "Focuses the element when it mounts.",
  "api.common.inheritedProps.checked.description":
    "Controls the checked state.",
  "api.common.inheritedProps.children.description":
    "Content rendered inside the element.",
  "api.common.inheritedProps.className.description":
    "Adds custom className values to the root element.",
  "api.common.inheritedProps.defaultChecked.description":
    "Sets the initial unchecked or checked state.",
  "api.common.inheritedProps.defaultValue.description":
    "Sets the initial uncontrolled value.",
  "api.common.inheritedProps.disabled.description":
    "Disables user interaction with the element.",
  "api.common.inheritedProps.form.description":
    "Associates the control with a form by id.",
  "api.common.inheritedProps.htmlFor.description":
    "Associates the label with a form control id.",
  "api.common.inheritedProps.id.description": "Sets the element id.",
  "api.common.inheritedProps.max.description":
    "Sets the maximum accepted value.",
  "api.common.inheritedProps.maxLength.description":
    "Sets the maximum text length.",
  "api.common.inheritedProps.min.description":
    "Sets the minimum accepted value.",
  "api.common.inheritedProps.minLength.description":
    "Sets the minimum text length.",
  "api.common.inheritedProps.name.description": "Sets the form field name.",
  "api.common.inheritedProps.onBlur.description":
    "Runs when the element loses focus.",
  "api.common.inheritedProps.onChange.description":
    "Runs when the value changes.",
  "api.common.inheritedProps.onClick.description":
    "Runs when the element is clicked.",
  "api.common.inheritedProps.onFocus.description":
    "Runs when the element receives focus.",
  "api.common.inheritedProps.onKeyDown.description":
    "Runs when a key is pressed.",
  "api.common.inheritedProps.onKeyUp.description":
    "Runs when a key is released.",
  "api.common.inheritedProps.onMouseEnter.description":
    "Runs when the pointer enters the element.",
  "api.common.inheritedProps.onMouseLeave.description":
    "Runs when the pointer leaves the element.",
  "api.common.inheritedProps.pattern.description":
    "Sets a validation pattern for the value.",
  "api.common.inheritedProps.placeholder.description":
    "Shows placeholder text when the field is empty.",
  "api.common.inheritedProps.readOnly.description":
    "Prevents user edits while keeping the value readable.",
  "api.common.inheritedProps.required.description":
    "Marks the field as required for native validation.",
  "api.common.inheritedProps.role.description": "Sets the ARIA role.",
  "api.common.inheritedProps.style.description":
    "Adds inline styles to the root element.",
  "api.common.inheritedProps.title.description":
    "Sets advisory text for the element.",
  "api.common.inheritedProps.type.description": "Sets the native control type.",
  "api.common.inheritedProps.value.description": "Controls the current value.",
  "preview.route.eyebrow": "Preview route",
  "preview.route.languageLabel": "Preview language",
  "preview.route.navigationLabel": "Preview routes",
  "preview.route.previewing": "Previewing",
  "preview.components.a11yAndChange": "A11y and change",
  "preview.components.apiReference": "API reference",
  "preview.components.copyThemeCss": "Copy theme CSS",
  "preview.components.formNamespace": "Form namespace",
  "preview.components.generatedRegistryJsonAndInstallCommands":
    "Generated registry JSON and install commands",
  "preview.components.jsxJoin": "JsxJoin",
  "preview.components.npxShadcnLatestAdd": "npx shadcn@latest add",
  "preview.components.packageInstall": "Package install",
  "preview.components.previewArchitecture": "Preview architecture",
  "preview.components.resetTheme": "Reset theme",
  "preview.components.shadcnInstall": "shadcn install",
  "preview.components.tailwindSetup": "Tailwind setup",
  "preview.components.themeBuilder": "Theme builder",
  "preview.components.version18Or19": "18 or 19",
  "preview.components.version4": "v4",
  "preview.components.viteNextOrEquivalent": "Vite / Next / equivalent",
} satisfies PreviewLanguageMessages

const WORD_OVERRIDES: Record<string, string> = {
  a11y: "a11y",
  antd: "AntD",
  api: "API",
  aria: "ARIA",
  css: "CSS",
  fieldmarker: "FieldMarker",
  html: "HTML",
  htmlfor: "htmlFor",
  inputpassword: "InputPassword",
  jsdoc: "JSDoc",
  json: "JSON",
  jsx: "JSX",
  jsxjoin: "JsxJoin",
  maxlength: "maxLength",
  npx: "npx",
  onchange: "onChange",
  props: "props",
  radix: "Radix",
  react: "React",
  resetfields: "resetFields",
  shadcn: "shadcn",
  sonner: "Sonner",
  tailwind: "Tailwind",
  tsdoc: "TSDoc",
  ui: "UI",
  vite: "Vite",
  validatefields: "validateFields",
}

function createEnglishPreviewMessages(messageKeys: Iterable<string>) {
  return {
    ...Object.fromEntries(
      Array.from(messageKeys, (key) => [key, createMessageFromKey(key)]),
    ),
    ...EN_PREVIEW_MESSAGE_OVERRIDES,
  } satisfies PreviewLanguageMessages
}

function createMessageFromKey(key: string) {
  const segment = key.split(".").at(-1) ?? key
  const words = segment
    .replaceAll(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replaceAll(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .split(/\s+/)
    .filter(Boolean)
    .map(formatWord)

  if (words.length === 0) {
    return key
  }

  return [capitalizeFirstWord(words[0]), ...words.slice(1)].join(" ")
}

function formatWord(word: string) {
  const normalized = word.toLowerCase()

  return WORD_OVERRIDES[normalized] ?? normalized
}

function capitalizeFirstWord(word: string) {
  if (word === word.toUpperCase() || word === "shadcn" || word === "npx") {
    return word
  }

  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
}

export { createEnglishPreviewMessages }
