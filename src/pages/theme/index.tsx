import { Copy, RotateCcw } from "lucide-react"
import * as React from "react"
import {
  Alert,
  Badge,
  Button,
  Card as StickerCard,
  Checkbox,
  ColorPicker,
  Divider,
  Empty,
  Input,
  Progress,
  Range,
  Skeleton,
  Spinner,
  Switch,
  Table,
  Tabs,
  Tag,
  Textarea,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/layouts/preview"
import { COLOR_TOKEN_GROUPS } from "@/preview-data"

type ThemeStyle = React.CSSProperties & Record<`--${string}`, string>

interface ColorTokenFieldProps {
  label: string
  name: string
  onChange: (value: string) => void
  value: string
}

interface ScaleTokenFieldProps {
  max: number
  min: number
  name: string
  onChange: (value: string) => void
  previewClassName?: string
  step?: number
  value: string
}

const CONFIGURABLE_COLOR_TOKEN_GROUPS = COLOR_TOKEN_GROUPS.map((group) => ({
  ...group,
  tokens: group.tokens.filter((token) => !hasTokenDependency(token.value)),
})).filter((group) => group.tokens.length > 0)

const CONFIGURABLE_COLOR_TOKEN_ENTRIES =
  CONFIGURABLE_COLOR_TOKEN_GROUPS.flatMap((group) =>
    group.tokens.map((token) => ({
      ...token,
      groupLabelKey: group.labelKey,
    })),
  )

const DEFAULT_COLOR_VALUES = Object.fromEntries(
  CONFIGURABLE_COLOR_TOKEN_ENTRIES.map((token) => [token.name, token.value]),
)

const RADIUS_TOKENS = [
  ["--radius-su-xs", "10px"],
  ["--radius-su-sm", "12px"],
  ["--radius-su-md", "14px"],
  ["--radius-su-lg", "16px"],
  ["--radius-su-xl", "18px"],
  ["--radius-su-2xl", "22px"],
  ["--radius-su-3xl", "24px"],
  ["--radius-su-panel", "28px"],
] as const

const SHADOW_TOKENS = [
  ["--shadow-su-xs", 1],
  ["--shadow-su-sm", 2],
  ["--shadow-su-md", 3],
  ["--shadow-su-lg", 4],
  ["--shadow-su-xl", 5],
  ["--shadow-su-2xl", 8],
] as const

const THEME_TOKEN_COUNT =
  CONFIGURABLE_COLOR_TOKEN_ENTRIES.length +
  RADIUS_TOKENS.length +
  SHADOW_TOKENS.length

const PREVIEW_STATS = [
  ["preview.components.tokens", `${THEME_TOKEN_COUNT}`],
  ["preview.components.radiusScale", `${RADIUS_TOKENS.length}`],
  ["preview.components.shadowSteps", `${SHADOW_TOKENS.length}`],
] as const

function ThemePage() {
  const { td, tm } = usePreviewI18n()
  const [colors, setColors] = React.useState<Record<string, string>>(
    () => DEFAULT_COLOR_VALUES,
  )
  const [radii, setRadii] = React.useState<Record<string, string>>(() =>
    Object.fromEntries(RADIUS_TOKENS),
  )
  const [shadowOffsets, setShadowOffsets] = React.useState<
    Record<string, number>
  >(() => Object.fromEntries(SHADOW_TOKENS))
  const [copyState, setCopyState] = React.useState<"copied" | "idle">("idle")

  const themeStyle = React.useMemo<ThemeStyle>(() => {
    const shadowValues = Object.fromEntries(
      Object.entries(shadowOffsets).map(([name, offset]) => [
        name,
        createShadowValue(offset),
      ]),
    )

    return {
      ...colors,
      ...radii,
      ...shadowValues,
    } as ThemeStyle
  }, [colors, radii, shadowOffsets])

  const cssOutput = React.useMemo(
    () => createThemeCss(colors, radii, shadowOffsets),
    [colors, radii, shadowOffsets],
  )

  function updateColor(name: string, value: string) {
    setColors((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function updateRadius(name: string, value: string) {
    setRadii((current) => ({
      ...current,
      [name]: value,
    }))
  }

  function updateShadow(name: string, value: string) {
    const nextOffset = parseScaleValue(value, 0)

    setShadowOffsets((current) => ({
      ...current,
      [name]: nextOffset,
    }))
  }

  function resetTheme() {
    setColors(DEFAULT_COLOR_VALUES)
    setRadii(Object.fromEntries(RADIUS_TOKENS))
    setShadowOffsets(Object.fromEntries(SHADOW_TOKENS))
    setCopyState("idle")
  }

  async function copyThemeCss() {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(cssOutput)
      } else {
        copyTextWithFallback(cssOutput)
      }
    } catch {
      copyTextWithFallback(cssOutput)
    }

    setCopyState("copied")
  }

  return (
    <div className="flex min-w-0 flex-col gap-5 lg:h-full lg:min-h-0 lg:flex-row lg:overflow-hidden">
      <div className="flex min-w-0 flex-col gap-5 lg:h-full lg:w-[360px] lg:flex-none lg:overflow-y-auto lg:overscroll-contain lg:pr-2 lg:pb-2 [&>*]:shrink-0">
        <Card className="bg-su-fill-default-soft">
          <CardHeader divider="none">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="grid gap-2">
                <CardTitle>{tm("preview.components.themeBuilder")}</CardTitle>
                <CardDescription>
                  {tm(
                    "preview.components.tuneStickerUiTokensPreviewTheResultAndCopyTheThemeBlock",
                  )}
                </CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                {PREVIEW_STATS.map(([label, value]) => (
                  <Tag
                    className="border-2 bg-su-surface text-xs"
                    key={label}
                    variant="outlined"
                  >
                    {tm(label)}: {value}
                  </Tag>
                ))}
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="bg-su-surface">
          <CardHeader>
            <CardTitle>{tm("preview.components.colorTokens")}</CardTitle>
            <CardDescription>
              {tm(
                "preview.components.adjustCorePaperAccentFillAndTextTokensWithoutLeavingThePreview",
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {CONFIGURABLE_COLOR_TOKEN_GROUPS.map((group) => (
                <section
                  className="rounded-su-xl border border-su-ink bg-su-paper p-4"
                  key={group.labelKey}
                >
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-black text-su-ink">
                      {td(group.labelKey)}
                    </h3>
                    <Tag className="text-xs" color="secondary" variant="filled">
                      {group.tokens.length} {tm("preview.components.tokens")}
                    </Tag>
                  </div>
                  <div className="grid min-w-0 gap-3">
                    {group.tokens.map((token) => (
                      <ColorTokenField
                        key={token.name}
                        label={td(token.labelKey)}
                        name={token.name}
                        onChange={(value) => updateColor(token.name, value)}
                        value={colors[token.name]}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-su-fill-info">
          <CardHeader>
            <CardTitle>{tm("preview.components.shapeAndElevation")}</CardTitle>
            <CardDescription>
              {tm(
                "preview.components.setTheRadiusScaleAndHardOffsetShadowStepsUsedByStickerSurfaces",
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <section className="min-w-0 rounded-su-xl border border-su-ink bg-su-surface p-4">
                <h3 className="mb-3 text-sm font-black text-su-ink">
                  {tm("preview.components.radiusScale")}
                </h3>
                <div className="grid gap-3">
                  {RADIUS_TOKENS.map(([name]) => (
                    <ScaleTokenField
                      key={name}
                      max={36}
                      min={6}
                      name={name}
                      onChange={(value) => updateRadius(name, value)}
                      previewClassName="bg-su-fill-default"
                      value={radii[name]}
                    />
                  ))}
                </div>
              </section>

              <section className="min-w-0 rounded-su-xl border border-su-ink bg-su-surface p-4">
                <h3 className="mb-3 text-sm font-black text-su-ink">
                  {tm("preview.components.shadowSteps")}
                </h3>
                <div className="grid gap-3">
                  {SHADOW_TOKENS.map(([name]) => (
                    <ScaleTokenField
                      key={name}
                      max={12}
                      min={0}
                      name={name}
                      onChange={(value) => updateShadow(name, value)}
                      previewClassName="bg-su-fill-secondary"
                      value={`${shadowOffsets[name]}px`}
                    />
                  ))}
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>

      <aside className="flex min-w-0 flex-col gap-5 lg:h-full lg:min-w-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-contain lg:pr-2 lg:pb-2 [&>*]:shrink-0">
        <Card className="overflow-hidden bg-su-surface">
          <CardHeader>
            <CardTitle>{tm("preview.components.livePreview")}</CardTitle>
            <CardDescription>
              {tm(
                "preview.components.previewHowTheSameUtilitiesRespondToTheEditedThemeVariables",
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ThemePreview style={themeStyle} />
          </CardContent>
        </Card>

        <Card className="bg-su-fill-success">
          <CardHeader>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <CardTitle>{tm("preview.components.copyThemeCss")}</CardTitle>
                <CardDescription>
                  {tm(
                    "preview.components.pasteThisBlockAfterStickerUiTokensInYourAppCss",
                  )}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  aria-label={tm("preview.components.resetTheme")}
                  onClick={resetTheme}
                  size="icon"
                  variant="outlined"
                >
                  <RotateCcw aria-hidden="true" size={17} />
                </Button>
                <Button onClick={copyThemeCss} size="sm">
                  <Copy aria-hidden="true" size={15} />
                  {copyState === "copied"
                    ? tm("preview.components.copied")
                    : tm("preview.components.copy")}
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="max-h-[520px] max-w-full overflow-auto rounded-su-lg border border-su-ink bg-su-surface p-4 text-xs leading-6 font-bold">
              <code>{cssOutput}</code>
            </pre>
          </CardContent>
        </Card>
      </aside>
    </div>
  )
}

function ColorTokenField({
  label,
  name,
  onChange,
  value,
}: ColorTokenFieldProps) {
  const inputId = React.useId()

  return (
    <label
      className="grid min-w-0 gap-2 rounded-su-lg border border-su-ink bg-su-surface p-3"
      htmlFor={inputId}
    >
      <span className="flex min-w-0 items-center justify-between gap-3">
        <span className="min-w-0 truncate text-sm font-black text-su-ink">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="size-7 shrink-0 rounded-su-sm border-2 border-su-ink shadow-su-xs"
          style={{ background: value }}
        />
      </span>
      <code className="block min-w-0 truncate text-[11px] font-extrabold text-su-fg-muted">
        {name}
      </code>
      <span className="flex min-w-0 items-center gap-2">
        <ColorPicker
          aria-label={name}
          className="h-10 shrink-0"
          onChange={onChange}
          showValue={false}
          size="sm"
          value={value}
        />
        <Input
          className="min-w-0 flex-1 bg-su-paper"
          id={inputId}
          onChange={onChange}
          size="sm"
          value={value}
        />
      </span>
    </label>
  )
}

function ScaleTokenField({
  max,
  min,
  name,
  onChange,
  previewClassName,
  step = 1,
  value,
}: ScaleTokenFieldProps) {
  const inputId = React.useId()
  const numericValue = parseScaleValue(value, 0)

  return (
    <label className="grid min-w-0 gap-2" htmlFor={inputId}>
      <span className="flex min-w-0 items-center justify-between gap-3">
        <code className="min-w-0 truncate text-xs font-extrabold text-su-fg-muted">
          {name}
        </code>
        <span className="shrink-0 text-xs font-black text-su-ink">{value}</span>
      </span>
      <span className="grid min-w-0 grid-cols-[minmax(0,1fr)_44px] items-center gap-3">
        <Range
          className="min-w-0"
          id={inputId}
          max={max}
          min={min}
          onChange={(nextValue) => onChange(`${nextValue}px`)}
          step={step}
          value={numericValue}
        />
        <span
          aria-hidden="true"
          className={`size-10 border-2 border-su-ink shadow-su-sm ${previewClassName}`}
          style={
            name.startsWith("--radius")
              ? { borderRadius: value }
              : { boxShadow: createShadowValue(numericValue) }
          }
        />
      </span>
    </label>
  )
}

function ThemePreview({ style }: { style: ThemeStyle }) {
  return (
    <div
      className="grid gap-5 rounded-su-panel border-[3px] border-su-ink bg-su-canvas p-5 shadow-su-2xl"
      style={style}
    >
      <StickerCard className="bg-su-paper" variant="panel">
        <StickerCard.Header decoration divider="dashed" dividerInset="card">
          <div className="min-w-0">
            <StickerCard.Title>Theme Lab</StickerCard.Title>
            <StickerCard.Description>
              The preview uses real sticker-ui components and the edited tokens.
            </StickerCard.Description>
          </div>
        </StickerCard.Header>
        <StickerCard.Content>
          <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_220px]">
            <div className="grid gap-3">
              <Alert tone="info">
                <Alert.Title>Preview Updated</Alert.Title>
                <Alert.Description>
                  Paper, ink, semantic fills, radius, and hard shadows inherit
                  from the same theme block.
                </Alert.Description>
              </Alert>
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button color="secondary" size="sm" variant="outlined">
                  Secondary
                </Button>
                <Button color="success" size="sm" variant="dashed">
                  Publish
                </Button>
                <Button color="danger" size="sm" variant="text">
                  Danger
                </Button>
              </div>
            </div>
            <Empty
              description="Empty states keep the same paper and accent rhythm."
              heading="No drift"
              size="sm"
              tone="warning"
            />
          </div>
        </StickerCard.Content>
      </StickerCard>

      <section className="grid gap-4 xl:grid-cols-2">
        <StickerCard className="bg-su-surface">
          <StickerCard.Header>
            <StickerCard.Title>Form Controls</StickerCard.Title>
            <StickerCard.Description>
              Inputs, choices, switches, and native color surfaces.
            </StickerCard.Description>
          </StickerCard.Header>
          <StickerCard.Content>
            <div className="grid gap-3 sm:grid-cols-2">
              <Input defaultValue="sticker-ui/theme" />
              <ColorPicker defaultValue="#ffe08a" showValue={false} />
            </div>
            <Textarea
              defaultValue="Theme tokens should make every control feel like the same product."
              rows={3}
            />
            <div className="grid gap-3 rounded-su-xl border border-su-ink bg-su-paper p-3">
              <Checkbox defaultChecked label="Use paper fills" />
              <Checkbox label="Preview disabled state" tone="secondary" />
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-extrabold text-su-ink">
                  Compact mode
                </span>
                <Switch defaultChecked tone="success" variant="filled" />
              </div>
            </div>
          </StickerCard.Content>
        </StickerCard>

        <StickerCard className="bg-su-fill-info">
          <StickerCard.Header>
            <StickerCard.Title>Status Stack</StickerCard.Title>
            <StickerCard.Description>
              Badges, tags, progress, loading, and placeholders.
            </StickerCard.Description>
          </StickerCard.Header>
          <StickerCard.Content>
            <div className="flex flex-wrap gap-2">
              <Badge content={12} tone="danger">
                <Button size="sm" variant="outlined">
                  Inbox
                </Button>
              </Badge>
              <Badge dot tone="success">
                <Button size="sm" variant="outlined">
                  Online
                </Button>
              </Badge>
              <Tag color="info">Info</Tag>
              <Tag color="warning" variant="outlined">
                Review
              </Tag>
              <Tag color="success" variant="filled">
                Ready
              </Tag>
            </div>
            <div className="grid gap-3">
              <Progress showValue tone="success" value={72} />
              <Progress
                aria-label="Syncing theme tokens"
                tone="secondary"
                value={null}
              />
            </div>
            <div className="flex items-center gap-3 rounded-su-xl border border-su-ink bg-su-surface p-3">
              <Spinner label="Syncing preview" size="sm" tone="info" />
              <div className="grid flex-1 gap-2">
                <Skeleton className="max-w-[82%]" shape="line" />
                <Skeleton className="max-w-[58%]" shape="line" tone="warning" />
              </div>
            </div>
          </StickerCard.Content>
        </StickerCard>
      </section>

      <StickerCard className="bg-su-fill-default-soft">
        <StickerCard.Header>
          <StickerCard.Title>Navigation And Data</StickerCard.Title>
          <StickerCard.Description>
            Tabs, dividers, tables, and cards all respond to the same tokens.
          </StickerCard.Description>
        </StickerCard.Header>
        <StickerCard.Content>
          <Tabs defaultValue="components" tone="secondary">
            <Tabs.List aria-label="Theme preview sections">
              <Tabs.Trigger value="components">Components</Tabs.Trigger>
              <Tabs.Trigger value="tokens">Tokens</Tabs.Trigger>
              <Tabs.Trigger value="states">States</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="components">
              <div className="grid gap-3 md:grid-cols-3">
                {["Button", "Input", "Card"].map((name) => (
                  <div
                    className="rounded-su-xl border-2 border-su-ink bg-su-surface p-3 shadow-su-sm"
                    key={name}
                  >
                    <div className="text-sm font-black text-su-ink">{name}</div>
                    <div className="mt-1 text-xs font-bold text-su-fg-muted">
                      Radius and shadow update live.
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Content>
            <Tabs.Content value="tokens">
              <div className="flex flex-wrap gap-2">
                {["default", "secondary", "info", "warning", "danger"].map(
                  (tone) => (
                    <span
                      className="rounded-su-sm border-2 border-su-ink px-3 py-2 text-xs font-black shadow-su-sm"
                      key={tone}
                      style={{
                        background: `var(--color-su-fill-${tone})`,
                        color: "var(--color-su-ink)",
                      }}
                    >
                      {tone}
                    </span>
                  ),
                )}
              </div>
            </Tabs.Content>
            <Tabs.Content value="states">
              <Alert size="sm" tone="success" variant="outlined">
                <Alert.Title>All states inherit the edited theme.</Alert.Title>
                <Alert.Description>
                  This includes helper text, semantic fills, and pressed paper
                  shadows.
                </Alert.Description>
              </Alert>
            </Tabs.Content>
          </Tabs>

          <Divider align="start" tone="warning" variant="dashed">
            Component readiness
          </Divider>

          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>Component</Table.Head>
                <Table.Head>Status</Table.Head>
                <Table.Head className="text-right">Coverage</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {[
                ["Buttons", "Interactive", "High"],
                ["Forms", "Editable", "High"],
                ["Feedback", "Semantic", "High"],
                ["Data", "Structured", "Medium"],
              ].map(([name, status, coverage]) => (
                <Table.Row key={name}>
                  <Table.Cell className="font-black">{name}</Table.Cell>
                  <Table.Cell>
                    <Tag color="success" size="sm" variant="filled">
                      {status}
                    </Tag>
                  </Table.Cell>
                  <Table.Cell className="text-right font-extrabold">
                    {coverage}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </StickerCard.Content>
      </StickerCard>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-su-xl border-2 border-su-ink bg-su-fill-secondary p-4 shadow-su-md">
          <div className="font-black text-su-ink">Surface</div>
          <p className="mt-1 text-sm font-bold text-su-fg-secondary">
            Cards inherit the edited surface colors.
          </p>
        </div>
        <div className="rounded-su-xl border-2 border-su-ink bg-su-fill-success p-4 shadow-su-md">
          <div className="font-black text-su-ink">Success</div>
          <p className="mt-1 text-sm font-bold text-su-fg-success">
            Semantic text stays readable.
          </p>
        </div>
        <div className="rounded-su-xl border-2 border-su-ink bg-su-fill-danger p-4 shadow-su-md">
          <div className="font-black text-su-ink">Danger</div>
          <p className="mt-1 text-sm font-bold text-su-fg-danger">
            Radius and shadow scales update together.
          </p>
        </div>
      </div>
    </div>
  )
}

function createThemeCss(
  colors: Record<string, string>,
  radii: Record<string, string>,
  shadowOffsets: Record<string, number>,
) {
  return `@theme inline {
${createCssSection("Color tokens", colors)}

${createCssSection("Radius tokens", radii)}

${createCssSection(
  "Shadow tokens",
  Object.fromEntries(
    Object.entries(shadowOffsets).map(([name, offset]) => [
      name,
      createShadowValue(offset),
    ]),
  ),
)}
}`
}

function createCssSection(title: string, values: Record<string, string>) {
  return `  /* ${title} */
${Object.entries(values)
  .map(([name, value]) => `  ${name}: ${value};`)
  .join("\n")}`
}

function hasTokenDependency(value: string) {
  return /\bvar\(/.test(value)
}

function parseScaleValue(value: number | string, fallback: number) {
  const numericValue =
    typeof value === "number" ? value : Number.parseFloat(value)

  return Number.isFinite(numericValue) ? numericValue : fallback
}

function createShadowValue(offset: number) {
  const safeOffset = parseScaleValue(offset, 0)

  return `${safeOffset}px ${safeOffset}px 0 var(--color-su-ink)`
}

function copyTextWithFallback(text: string) {
  const textarea = document.createElement("textarea")
  textarea.value = text
  textarea.setAttribute("readonly", "")
  textarea.style.position = "fixed"
  textarea.style.opacity = "0"
  document.body.append(textarea)
  textarea.select()
  document.execCommand("copy")
  textarea.remove()
}

export { ThemePage }
