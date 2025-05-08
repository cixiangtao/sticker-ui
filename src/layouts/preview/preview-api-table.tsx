import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
} from "sticker-ui"

import { type PreviewMessageKey, usePreviewI18n } from "../../i18n/preview"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./preview-card"

interface PreviewApiDoc {
  components?: PreviewApiComponent[]
  descriptionKey: string
  exports: PreviewApiExport[]
  name: string
  sourcePath: string
  title: string
  types: PreviewApiType[]
  variants: PreviewApiVariant[]
}

interface PreviewApiComponent {
  descriptionKey?: string
  name: string
  props?: PreviewApiComponentProps
  remarksKey?: string
}

interface PreviewApiComponentProps {
  defaultValue?: string
  deprecatedKey?: string
  descriptionKey?: string
  inherits?: string[]
  inheritedMembers?: PreviewApiMember[]
  members: PreviewApiMember[]
  remarksKey?: string
  type: string
}

interface PreviewApiExport {
  descriptionKey?: string
  kind: string
  name: string
}

interface PreviewApiMember {
  defaultValue?: string
  deprecatedKey?: string
  descriptionKey?: string
  name: string
  optional?: boolean
  remarksKey?: string
  required?: boolean
  type: string
}

interface PreviewApiType {
  defaultValue?: string
  deprecatedKey?: string
  descriptionKey?: string
  inherits?: string[]
  inheritedMembers?: PreviewApiMember[]
  kind: string
  members: PreviewApiMember[]
  name: string
  remarksKey?: string
  type?: string
}

interface PreviewApiVariant {
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
  const { td, tm } = usePreviewI18n()
  const supportingTypes = getSupportingTypes(api)

  return (
    <Card className="bg-su-fill-warning">
      <CardHeader>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-xs font-extrabold text-su-fg-warning uppercase">
              {tm("preview.common.apiReference")}
            </div>
            <CardTitle className="mt-1">{api.title}</CardTitle>
            <CardDescription>{td(api.descriptionKey)}</CardDescription>
          </div>
          <code className="w-fit rounded-su-md border border-su-ink bg-su-surface px-3 py-2 text-xs font-extrabold">
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
  const { td, tm } = usePreviewI18n()

  return (
    <section className="grid gap-3">
      <SectionTitle messageKey="preview.components.components" />
      <div className="grid gap-3">
        {components.map((component) => (
          <div
            className="grid gap-3 rounded-su-xl border-2 border-su-ink bg-su-surface p-4 shadow-su-md"
            key={component.name}
          >
            <div className="grid gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <code className="text-sm font-black">{component.name}</code>
                <span className="rounded-full border border-su-ink bg-su-fill-default px-2 py-0.5 text-[10px] font-extrabold uppercase">
                  {tm("preview.common.component")}
                </span>
              </div>
              {component.descriptionKey ? (
                <p className="text-sm leading-6 font-medium text-su-fg-muted">
                  {td(component.descriptionKey)}
                </p>
              ) : null}
              {component.remarksKey ? (
                <p className="text-xs leading-5 font-bold text-su-fg-subtle">
                  {td(component.remarksKey)}
                </p>
              ) : null}
            </div>
            {component.props ? (
              <ComponentPropsCard props={component.props} />
            ) : (
              <span className="text-xs font-bold text-su-fg-placeholder">
                {tm("preview.common.noPropsDetected")}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function ComponentPropsCard({ props }: { props: PreviewApiComponentProps }) {
  const { td, tm } = usePreviewI18n()
  const inheritedMembers = props.inheritedMembers ?? []

  return (
    <div className="grid gap-3 rounded-su-lg border border-su-ink bg-su-paper p-3">
      <div className="grid gap-2">
        <div className="text-xs font-black text-su-fg-subtle uppercase">
          {tm("preview.common.propsSource")}
        </div>
        <Tag as="code" color="default" rounded="pill" size="sm" variant="solid">
          {props.type}
        </Tag>
        {props.descriptionKey ? (
          <p className="text-sm leading-6 font-medium text-su-fg-muted">
            {td(props.descriptionKey)}
          </p>
        ) : null}
        {props.remarksKey ? (
          <p className="text-xs leading-5 font-bold text-su-fg-subtle">
            {td(props.remarksKey)}
          </p>
        ) : null}
        <InheritanceList inherits={props.inherits} />
      </div>
      {props.members.length > 0 ? (
        <MemberTable members={props.members} />
      ) : (
        <span className="text-xs font-bold text-su-fg-placeholder">
          {tm("preview.common.noCustomPropsDetected")}
        </span>
      )}
      {inheritedMembers.length > 0 ? (
        <div className="grid gap-2">
          <div className="text-xs font-black text-su-fg-subtle uppercase">
            {tm("preview.common.inheritedNativeProps")}
          </div>
          <MemberTable members={inheritedMembers} />
        </div>
      ) : null}
    </div>
  )
}

function ExportList({ exports }: { exports: PreviewApiExport[] }) {
  const { tm } = usePreviewI18n()

  if (exports.length === 0) {
    return null
  }

  return (
    <section className="grid gap-2">
      <SectionTitle messageKey="preview.common.exports" />
      <div className="flex flex-wrap gap-2">
        {exports.map((entry) => (
          <span
            className="inline-flex items-center gap-2 rounded-su-md border-2 border-su-ink bg-su-surface px-3 py-2 text-xs font-extrabold shadow-su-sm"
            key={entry.name}
          >
            <code>{entry.name}</code>
            <span className="rounded-full bg-su-fill-info px-2 py-0.5 text-[10px] uppercase">
              {tm(toApiKindMessageKey(entry.kind))}
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

function SectionTitle({ messageKey }: { messageKey: PreviewMessageKey }) {
  const { tm } = usePreviewI18n()

  return (
    <h2 className="text-sm font-black tracking-wide text-su-ink uppercase">
      {tm(messageKey)}
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
  const { td, tm } = usePreviewI18n()

  return (
    <section className="grid gap-3">
      <SectionTitle messageKey={toSectionTitleMessageKey(title)} />
      {types.map((type) => (
        <div
          className="grid gap-3 rounded-su-xl border-2 border-su-ink bg-su-surface p-4 shadow-su-md"
          key={type.name}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="grid gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <code className="text-sm font-black">{type.name}</code>
                <Tag color="secondary" size="xs" variant="solid">
                  {tm(toApiKindMessageKey(type.kind))}
                </Tag>
              </div>
              {type.descriptionKey ? (
                <p className="text-sm leading-6 font-medium text-su-fg-muted">
                  {td(type.descriptionKey)}
                </p>
              ) : null}
              {type.remarksKey ? (
                <p className="text-xs leading-5 font-bold text-su-fg-subtle">
                  {td(type.remarksKey)}
                </p>
              ) : null}
            </div>
            <InheritanceList inherits={type.inherits} />
          </div>
          {type.members.length > 0 ? (
            <MemberTable members={type.members} />
          ) : type.type ? (
            <code className="overflow-x-auto rounded-su-md border border-su-ink bg-su-surface-muted px-3 py-2 text-xs font-bold">
              {type.type}
            </code>
          ) : null}
        </div>
      ))}
    </section>
  )
}

function MemberTable({ members }: { members: PreviewApiMember[] }) {
  const { td, tm } = usePreviewI18n()

  return (
    <Table className="min-w-[720px]" containerClassName="shadow-none">
      <TableHeader>
        <TableRow>
          <TableHead>{tm("preview.common.prop")}</TableHead>
          <TableHead>{tm("preview.components.type")}</TableHead>
          <TableHead>{tm("preview.components.default")}</TableHead>
          <TableHead>{tm("preview.components.description")}</TableHead>
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
                    {tm("preview.components.required")}
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
                <span className="text-xs font-bold text-su-fg-placeholder">
                  -
                </span>
              )}
            </TableCell>
            <TableCell>
              <div className="grid gap-1">
                {member.descriptionKey ? (
                  <span className="leading-6 font-medium text-su-fg-muted">
                    {td(member.descriptionKey)}
                  </span>
                ) : (
                  <span className="text-xs font-bold text-su-fg-placeholder">
                    {tm("preview.common.noJsdocDescriptionYet")}
                  </span>
                )}
                {member.deprecatedKey ? (
                  <span className="rounded-su-xs bg-su-fill-danger px-2 py-1 text-xs font-extrabold text-su-fg-danger">
                    {tm("preview.common.deprecated")}:{" "}
                    {td(member.deprecatedKey)}
                  </span>
                ) : null}
                {member.remarksKey ? (
                  <span className="text-xs leading-5 font-bold text-su-fg-subtle">
                    {td(member.remarksKey)}
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
  const { td, tm } = usePreviewI18n()

  return (
    <section className="grid gap-3">
      <SectionTitle messageKey="preview.components.variants" />
      {variants.map((variant) => (
        <div
          className="grid gap-3 rounded-su-xl border-2 border-su-ink bg-su-surface p-4 shadow-su-md"
          key={variant.name}
        >
          <div>
            <code className="text-sm font-black">{variant.name}</code>
            {variant.descriptionKey ? (
              <p className="mt-1 text-sm leading-6 font-medium text-su-fg-muted">
                {td(variant.descriptionKey)}
              </p>
            ) : null}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {variant.groups.map((group) => (
              <div
                className="rounded-su-lg border border-su-ink bg-su-paper p-3"
                key={group.name}
              >
                <div className="flex items-center justify-between gap-2">
                  <code className="font-black">{group.name}</code>
                  {group.defaultValue ? (
                    <span className="rounded-full bg-su-fill-secondary px-2 py-0.5 text-[10px] font-extrabold uppercase">
                      {tm("preview.common.default")}: {group.defaultValue}
                    </span>
                  ) : null}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.values.map((value) => (
                    <code
                      className="rounded-su-xs border border-su-ink bg-su-surface px-2 py-1 text-xs font-bold"
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

function toApiKindMessageKey(kind: string): PreviewMessageKey {
  if (kind === "interface") {
    return "preview.common.interface"
  }

  if (kind === "type") {
    return "preview.common.type"
  }

  return "preview.common.variant"
}

function toSectionTitleMessageKey(title: string): PreviewMessageKey {
  return title === "Supporting Types"
    ? "preview.common.supportingTypes"
    : "preview.common.propsAndTypes"
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
