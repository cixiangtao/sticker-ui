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
  type: string
}

interface PreviewApiType {
  defaultValue?: string
  deprecated?: string
  deprecatedKey?: string
  description?: string
  descriptionKey?: string
  inherits?: string[]
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
            <div className="text-text-warning-muted text-xs font-extrabold uppercase">
              {t("API Reference")}
            </div>
            <CardTitle className="mt-1">{api.title}</CardTitle>
            <CardDescription>
              {translateApiText(t, api.descriptionKey, api.description)}
            </CardDescription>
          </div>
          <code className="rounded-sticker-md border-ink bg-surface w-fit border px-3 py-2 text-xs font-extrabold">
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
            className="rounded-sticker-xl border-ink bg-surface shadow-sticker-md grid gap-3 border-2 p-4"
            key={component.name}
          >
            <div className="grid gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <code className="text-sm font-black">{component.name}</code>
                <span className="border-ink bg-fill-default rounded-full border px-2 py-0.5 text-[10px] font-extrabold uppercase">
                  {t("component")}
                </span>
              </div>
              {component.description ? (
                <p className="text-text-muted text-sm leading-6 font-medium">
                  {translateApiText(
                    t,
                    component.descriptionKey,
                    component.description,
                  )}
                </p>
              ) : null}
              {component.remarks ? (
                <p className="text-text-subtle text-xs leading-5 font-bold">
                  {translateApiText(t, component.remarksKey, component.remarks)}
                </p>
              ) : null}
            </div>
            {component.props ? (
              <ComponentPropsCard props={component.props} />
            ) : (
              <span className="text-text-placeholder text-xs font-bold">
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

  return (
    <div className="rounded-sticker-lg border-ink bg-paper grid gap-3 border p-3">
      <div className="grid gap-2">
        <div className="text-text-subtle text-xs font-black uppercase">
          {t("Props source")}
        </div>
        <Tag as="code" color="default" rounded="pill" size="sm" variant="solid">
          {props.type}
        </Tag>
        {props.description ? (
          <p className="text-text-muted text-sm leading-6 font-medium">
            {translateApiText(t, props.descriptionKey, props.description)}
          </p>
        ) : null}
        {props.remarks ? (
          <p className="text-text-subtle text-xs leading-5 font-bold">
            {translateApiText(t, props.remarksKey, props.remarks)}
          </p>
        ) : null}
        <InheritanceList inherits={props.inherits} />
      </div>
      {props.members.length > 0 ? (
        <MemberTable members={props.members} />
      ) : (
        <span className="text-text-placeholder text-xs font-bold">
          {t("No custom props detected.")}
        </span>
      )}
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
            className="rounded-sticker-md border-ink bg-surface shadow-sticker-sm inline-flex items-center gap-2 border-2 px-3 py-2 text-xs font-extrabold"
            key={entry.name}
          >
            <code>{entry.name}</code>
            <span className="bg-fill-info rounded-full px-2 py-0.5 text-[10px] uppercase">
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
    <h2 className="text-ink text-sm font-black tracking-wide uppercase">
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
          className="rounded-sticker-xl border-ink bg-surface shadow-sticker-md grid gap-3 border-2 p-4"
          key={type.name}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="grid gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <code className="text-sm font-black">{type.name}</code>
                <span className="border-ink bg-fill-secondary rounded-full border px-2 py-0.5 text-[10px] font-extrabold uppercase">
                  {t(type.kind)}
                </span>
              </div>
              {type.description ? (
                <p className="text-text-muted text-sm leading-6 font-medium">
                  {translateApiText(t, type.descriptionKey, type.description)}
                </p>
              ) : null}
              {type.remarks ? (
                <p className="text-text-subtle text-xs leading-5 font-bold">
                  {translateApiText(t, type.remarksKey, type.remarks)}
                </p>
              ) : null}
            </div>
            <InheritanceList inherits={type.inherits} />
          </div>
          {type.members.length > 0 ? (
            <MemberTable members={type.members} />
          ) : type.type ? (
            <code className="rounded-sticker-md border-ink bg-surface-muted overflow-x-auto border px-3 py-2 text-xs font-bold">
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
                {member.optional ? (
                  <Tag
                    as="span"
                    color="info"
                    rounded="pill"
                    size="xs"
                    variant="filled"
                  >
                    {t("optional")}
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
                <span className="text-text-placeholder text-xs font-bold">
                  -
                </span>
              )}
            </TableCell>
            <TableCell>
              <div className="grid gap-1">
                {member.description ? (
                  <span className="text-text-muted leading-6 font-medium">
                    {translateApiText(
                      t,
                      member.descriptionKey,
                      member.description,
                    )}
                  </span>
                ) : (
                  <span className="text-text-placeholder text-xs font-bold">
                    {t("No JSDoc description yet.")}
                  </span>
                )}
                {member.deprecated ? (
                  <span className="rounded-sticker-xs bg-fill-danger-soft text-text-danger px-2 py-1 text-xs font-extrabold">
                    {t("Deprecated")}:{" "}
                    {translateApiText(
                      t,
                      member.deprecatedKey,
                      member.deprecated,
                    )}
                  </span>
                ) : null}
                {member.remarks ? (
                  <span className="text-text-subtle text-xs leading-5 font-bold">
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
          className="rounded-sticker-xl border-ink bg-surface shadow-sticker-md grid gap-3 border-2 p-4"
          key={variant.name}
        >
          <div>
            <code className="text-sm font-black">{variant.name}</code>
            {variant.description ? (
              <p className="text-text-muted mt-1 text-sm leading-6 font-medium">
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
                className="rounded-sticker-lg border-ink bg-paper border p-3"
                key={group.name}
              >
                <div className="flex items-center justify-between gap-2">
                  <code className="font-black">{group.name}</code>
                  {group.defaultValue ? (
                    <span className="bg-fill-secondary rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase">
                      {t("default")}: {group.defaultValue}
                    </span>
                  ) : null}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.values.map((value) => (
                    <code
                      className="rounded-sticker-xs border-ink bg-surface border px-2 py-1 text-xs font-bold"
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
