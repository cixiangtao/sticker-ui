import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
} from "sticker-ui"

import { usePreviewI18n } from "../../i18n/preview"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./preview-card"

interface PreviewApiDoc {
  components?: PreviewApiComponent[]
  description: string
  descriptionKey?: string
  exports: PreviewApiExport[]
  name: string
  sourcePath: string
  title: string
  types: PreviewApiType[]
  variants: PreviewApiVariant[]
}

interface PreviewApiComponent {
  description?: string
  descriptionKey?: string
  name: string
  props?: PreviewApiComponentProps
  remarks?: string
  remarksKey?: string
}

interface PreviewApiComponentProps {
  defaultValue?: string
  deprecated?: string
  deprecatedKey?: string
  description?: string
  descriptionKey?: string
  inherits?: string[]
  inheritedMembers?: PreviewApiMember[]
  members: PreviewApiMember[]
  remarks?: string
  remarksKey?: string
  type: string
}

interface PreviewApiExport {
  description?: string
  descriptionKey?: string
  kind: string
  name: string
}

interface PreviewApiMember {
  defaultValue?: string
  deprecated?: string
  deprecatedKey?: string
  description?: string
  descriptionKey?: string
  name: string
  optional?: boolean
  remarks?: string
  remarksKey?: string
  required?: boolean
  type: string
}

interface PreviewApiType {
  defaultValue?: string
  deprecated?: string
  deprecatedKey?: string
  description?: string
  descriptionKey?: string
  inherits?: string[]
  inheritedMembers?: PreviewApiMember[]
  kind: string
  members: PreviewApiMember[]
  name: string
  remarks?: string
  remarksKey?: string
  type?: string
}

interface PreviewApiVariant {
  description?: string
  descriptionKey?: string
  groups: PreviewApiVariantGroup[]
  name: string
}

interface PreviewApiVariantGroup {
  defaultValue?: string
  name: string
  values: string[]
}

interface PreviewApiTableProps {
  api: PreviewApiDoc
}

function PreviewApiTable({ api }: PreviewApiTableProps) {
  const { t } = usePreviewI18n()
  const supportingTypes = getSupportingTypes(api)

  return (
    <Card className="bg-fill-warning">
      <CardHeader>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-xs font-extrabold text-text-warning-muted uppercase">
              {t("API Reference")}
            </div>
            <CardTitle className="mt-1">{api.title}</CardTitle>
            <CardDescription>
              {translateApiText(t, api.descriptionKey, api.description)}
            </CardDescription>
          </div>
          <code className="w-fit rounded-sticker-md border border-ink bg-surface px-3 py-2 text-xs font-extrabold">
            {api.sourcePath}
          </code>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-5">
          {api.components && api.components.length > 0 ? (
            <ComponentList components={api.components} />
          ) : null}
          {api.variants.length > 0 ? (
            <VariantList variants={api.variants} />
          ) : null}
          {supportingTypes.length > 0 ? (
            <TypeList title="Supporting Types" types={supportingTypes} />
          ) : null}
          <ExportList exports={api.exports} />
        </div>
      </CardContent>
    </Card>
  )
}

function ComponentList({ components }: { components: PreviewApiComponent[] }) {
  const { t } = usePreviewI18n()

  return (
    <section className="grid gap-3">
      <SectionTitle>Components</SectionTitle>
      <div className="grid gap-3">
        {components.map((component) => (
          <div
            className="grid gap-3 rounded-sticker-xl border-2 border-ink bg-surface p-4 shadow-sticker-md"
            key={component.name}
          >
            <div className="grid gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <code className="text-sm font-black">{component.name}</code>
                <span className="rounded-full border border-ink bg-fill-default px-2 py-0.5 text-[10px] font-extrabold uppercase">
                  {t("component")}
                </span>
              </div>
              {component.description ? (
                <p className="text-sm leading-6 font-medium text-text-muted">
                  {translateApiText(
                    t,
                    component.descriptionKey,
                    component.description,
                  )}
                </p>
              ) : null}
              {component.remarks ? (
                <p className="text-xs leading-5 font-bold text-text-subtle">
                  {translateApiText(t, component.remarksKey, component.remarks)}
                </p>
              ) : null}
            </div>
            {component.props ? (
              <ComponentPropsCard props={component.props} />
            ) : (
              <span className="text-xs font-bold text-text-placeholder">
                {t("No props detected.")}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function ComponentPropsCard({ props }: { props: PreviewApiComponentProps }) {
  const { t } = usePreviewI18n()
  const inheritedMembers = props.inheritedMembers ?? []

  return (
    <div className="grid gap-3 rounded-sticker-lg border border-ink bg-paper p-3">
      <div className="grid gap-2">
        <div className="text-xs font-black text-text-subtle uppercase">
          {t("Props source")}
        </div>
        <Tag as="code" color="default" rounded="pill" size="sm" variant="solid">
          {props.type}
        </Tag>
        {props.description ? (
          <p className="text-sm leading-6 font-medium text-text-muted">
            {translateApiText(t, props.descriptionKey, props.description)}
          </p>
        ) : null}
        {props.remarks ? (
          <p className="text-xs leading-5 font-bold text-text-subtle">
            {translateApiText(t, props.remarksKey, props.remarks)}
          </p>
        ) : null}
        <InheritanceList inherits={props.inherits} />
      </div>
      {props.members.length > 0 ? (
        <MemberTable members={props.members} />
      ) : (
        <span className="text-xs font-bold text-text-placeholder">
          {t("No custom props detected.")}
        </span>
      )}
      {inheritedMembers.length > 0 ? (
        <div className="grid gap-2">
          <div className="text-xs font-black text-text-subtle uppercase">
            {t("Inherited native props")}
          </div>
          <MemberTable members={inheritedMembers} />
        </div>
      ) : null}
    </div>
  )
}

function ExportList({ exports }: { exports: PreviewApiExport[] }) {
  const { t } = usePreviewI18n()

  if (exports.length === 0) {
    return null
  }

  return (
    <section className="grid gap-2">
      <SectionTitle>Exports</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {exports.map((entry) => (
          <span
            className="inline-flex items-center gap-2 rounded-sticker-md border-2 border-ink bg-surface px-3 py-2 text-xs font-extrabold shadow-sticker-sm"
            key={entry.name}
          >
            <code>{entry.name}</code>
            <span className="rounded-full bg-fill-info px-2 py-0.5 text-[10px] uppercase">
              {t(entry.kind)}
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}

function InheritanceList({ inherits }: { inherits?: string[] }) {
  if (!inherits || inherits.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2">
      {inherits.map((item) => (
        <Tag
          as="code"
          color="default"
          key={item}
          rounded="pill"
          size="sm"
          variant="solid"
        >
          extends {item}
        </Tag>
      ))}
    </div>
  )
}

function SectionTitle({ children }: { children: string }) {
  const { t } = usePreviewI18n()

  return (
    <h2 className="text-sm font-black tracking-wide text-ink uppercase">
      {t(children)}
    </h2>
  )
}

function TypeList({
  title = "Props & Types",
  types,
}: {
  title?: string
  types: PreviewApiType[]
}) {
  const { t } = usePreviewI18n()

  return (
    <section className="grid gap-3">
      <SectionTitle>{title}</SectionTitle>
      {types.map((type) => (
        <div
          className="grid gap-3 rounded-sticker-xl border-2 border-ink bg-surface p-4 shadow-sticker-md"
          key={type.name}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="grid gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <code className="text-sm font-black">{type.name}</code>
                <Tag color="secondary" size="xs" variant="solid">
                  {t(type.kind)}
                </Tag>
              </div>
              {type.description ? (
                <p className="text-sm leading-6 font-medium text-text-muted">
                  {translateApiText(t, type.descriptionKey, type.description)}
                </p>
              ) : null}
              {type.remarks ? (
                <p className="text-xs leading-5 font-bold text-text-subtle">
                  {translateApiText(t, type.remarksKey, type.remarks)}
                </p>
              ) : null}
            </div>
            <InheritanceList inherits={type.inherits} />
          </div>
          {type.members.length > 0 ? (
            <MemberTable members={type.members} />
          ) : type.type ? (
            <code className="overflow-x-auto rounded-sticker-md border border-ink bg-surface-muted px-3 py-2 text-xs font-bold">
              {type.type}
            </code>
          ) : null}
        </div>
      ))}
    </section>
  )
}

function MemberTable({ members }: { members: PreviewApiMember[] }) {
  const { t } = usePreviewI18n()

  return (
    <Table className="min-w-[720px]" containerClassName="shadow-none">
      <TableHeader>
        <TableRow>
          <TableHead>{t("Prop")}</TableHead>
          <TableHead>{t("Type")}</TableHead>
          <TableHead>{t("Default")}</TableHead>
          <TableHead>{t("Description")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.name}>
            <TableCell>
              <div className="flex items-center gap-1">
                <code className="font-black">{member.name}</code>
                {member.required ? (
                  <Tag
                    as="span"
                    color="danger"
                    rounded="pill"
                    size="xs"
                    variant="solid"
                  >
                    {t("required")}
                  </Tag>
                ) : null}
              </div>
            </TableCell>
            <TableCell>
              <code className="text-xs font-bold">{member.type}</code>
            </TableCell>
            <TableCell>
              {member.defaultValue ? (
                <Tag
                  as="code"
                  color="default"
                  rounded="pill"
                  size="sm"
                  variant="solid"
                >
                  {member.defaultValue}
                </Tag>
              ) : (
                <span className="text-xs font-bold text-text-placeholder">
                  -
                </span>
              )}
            </TableCell>
            <TableCell>
              <div className="grid gap-1">
                {member.description ? (
                  <span className="leading-6 font-medium text-text-muted">
                    {translateApiText(
                      t,
                      member.descriptionKey,
                      member.description,
                    )}
                  </span>
                ) : (
                  <span className="text-xs font-bold text-text-placeholder">
                    {t("No JSDoc description yet.")}
                  </span>
                )}
                {member.deprecated ? (
                  <span className="rounded-sticker-xs bg-fill-danger-soft px-2 py-1 text-xs font-extrabold text-text-danger">
                    {t("Deprecated")}:{" "}
                    {translateApiText(
                      t,
                      member.deprecatedKey,
                      member.deprecated,
                    )}
                  </span>
                ) : null}
                {member.remarks ? (
                  <span className="text-xs leading-5 font-bold text-text-subtle">
                    {translateApiText(t, member.remarksKey, member.remarks)}
                  </span>
                ) : null}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

function VariantList({ variants }: { variants: PreviewApiVariant[] }) {
  const { t } = usePreviewI18n()

  return (
    <section className="grid gap-3">
      <SectionTitle>Variants</SectionTitle>
      {variants.map((variant) => (
        <div
          className="grid gap-3 rounded-sticker-xl border-2 border-ink bg-surface p-4 shadow-sticker-md"
          key={variant.name}
        >
          <div>
            <code className="text-sm font-black">{variant.name}</code>
            {variant.description ? (
              <p className="mt-1 text-sm leading-6 font-medium text-text-muted">
                {translateApiText(
                  t,
                  variant.descriptionKey,
                  variant.description,
                )}
              </p>
            ) : null}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {variant.groups.map((group) => (
              <div
                className="rounded-sticker-lg border border-ink bg-paper p-3"
                key={group.name}
              >
                <div className="flex items-center justify-between gap-2">
                  <code className="font-black">{group.name}</code>
                  {group.defaultValue ? (
                    <span className="rounded-full bg-fill-secondary px-2 py-0.5 text-[10px] font-extrabold uppercase">
                      {t("default")}: {group.defaultValue}
                    </span>
                  ) : null}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.values.map((value) => (
                    <code
                      className="rounded-sticker-xs border border-ink bg-surface px-2 py-1 text-xs font-bold"
                      key={value}
                    >
                      {value}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

function translateApiText(
  t: (message: string, defaultValue?: string) => string,
  key: string | undefined,
  value: string,
) {
  return key ? t(key, value) : t(value)
}

function getSupportingTypes(api: PreviewApiDoc) {
  const componentPropTypes = new Set(
    (api.components ?? [])
      .map((component) => component.props?.type)
      .filter((type): type is string => Boolean(type)),
  )

  return api.types.filter((type) => !componentPropTypes.has(type.name))
}

export { PreviewApiTable }
export type { PreviewApiDoc }
