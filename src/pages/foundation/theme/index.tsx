import { Copy, RotateCcw } from "lucide-react"
import * as React from "react"
import { Button, Input, Tag } from "sticker-ui"

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

const COLOR_TOKEN_ENTRIES = COLOR_TOKEN_GROUPS.flatMap((group) =>
  group.tokens.map((token) => ({
    ...token,
    groupLabelKey: group.labelKey,
  })),
)

const DEFAULT_COLOR_VALUES = Object.fromEntries(
  COLOR_TOKEN_ENTRIES.map((token) => [token.name, token.value]),
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
  COLOR_TOKEN_ENTRIES.length + RADIUS_TOKENS.length + SHADOW_TOKENS.length

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
    setShadowOffsets((current) => ({
      ...current,
      [name]: Number(value),
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
    <div className="grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
      <div className="grid min-w-0 gap-5">
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
              {COLOR_TOKEN_GROUPS.map((group) => (
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
                  <div className="grid min-w-0 gap-3 md:grid-cols-2">
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
            <div className="grid gap-4 lg:grid-cols-2">
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

      <aside className="grid min-w-0 content-start gap-5 xl:sticky xl:top-5">
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
  const canUseColorPicker = /^#[0-9a-fA-F]{6}$/.test(value)

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
      <span className="flex min-w-0 gap-2">
        {canUseColorPicker ? (
          <input
            aria-label={name}
            className="h-10 w-12 shrink-0 cursor-pointer rounded-su-sm border-2 border-su-ink bg-su-paper p-1"
            onChange={(event) => onChange(event.currentTarget.value)}
            type="color"
            value={value}
          />
        ) : null}
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
  const numericValue = Number.parseFloat(value) || 0

  return (
    <label className="grid min-w-0 gap-2" htmlFor={inputId}>
      <span className="flex min-w-0 items-center justify-between gap-3">
        <code className="min-w-0 truncate text-xs font-extrabold text-su-fg-muted">
          {name}
        </code>
        <span className="shrink-0 text-xs font-black text-su-ink">{value}</span>
      </span>
      <span className="grid min-w-0 grid-cols-[minmax(0,1fr)_44px] items-center gap-3">
        <input
          className="h-2 min-w-0 accent-[var(--color-su-ink)]"
          id={inputId}
          max={max}
          min={min}
          onChange={(event) => onChange(`${event.currentTarget.value}px`)}
          step={step}
          type="range"
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
      className="grid gap-4 rounded-su-panel border-[3px] border-su-ink bg-su-canvas p-5 shadow-su-2xl"
      style={style}
    >
      <div className="rounded-su-2xl border-[3px] border-su-ink bg-su-paper p-5 shadow-su-xl">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <div className="text-xl font-black text-su-ink">Theme Lab</div>
            <p className="mt-1 text-sm leading-6 font-bold text-su-fg-muted">
              Tune once, paste once, and every utility follows the same tokens.
            </p>
          </div>
          <div className="rounded-su-xl border-2 border-su-ink bg-su-fill-default px-3 py-2 text-sm font-black shadow-su-sm">
            Live
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-su-xl border-2 border-su-ink bg-su-fill-info p-4 shadow-su-md">
            <div className="font-black text-su-ink">Surface</div>
            <p className="mt-1 text-sm font-bold text-su-fg-info">
              Background, text, radius, and shadow are all inherited.
            </p>
          </div>
          <div className="rounded-su-xl border-2 border-su-ink bg-su-fill-success p-4 shadow-su-md">
            <div className="font-black text-su-ink">Success</div>
            <p className="mt-1 text-sm font-bold text-su-fg-success">
              Semantic colors keep status copy readable.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {["default", "secondary", "info", "warning", "danger"].map((tone) => (
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
        ))}
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

function createShadowValue(offset: number) {
  return `${offset}px ${offset}px 0 var(--color-su-ink)`
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
