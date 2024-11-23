import { Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/layouts/preview"
import { COLOR_TOKEN_GROUPS } from "@/preview-data"

const COLOR_TOKEN_COUNT = COLOR_TOKEN_GROUPS.reduce(
  (total, group) => total + group.tokens.length,
  0,
)

function ColorsPage() {
  const { td, tm } = usePreviewI18n()

  return (
    <div className="grid gap-6">
      <Card className="bg-fill-default-soft">
        <CardHeader divider="none">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="grid gap-2">
              <CardTitle>{tm("preview.components.colorTokens")}</CardTitle>
              <CardDescription>
                {tm(
                  "preview.components.completeColorTokenInventoryFromTokensCssGroupedByPurpose",
                )}
              </CardDescription>
            </div>
            <div className="rounded-sticker-xl border-2 border-ink bg-surface px-4 py-2 text-sm font-black shadow-sticker-sm">
              {COLOR_TOKEN_COUNT} {tm("preview.components.tokens")}
            </div>
          </div>
        </CardHeader>
      </Card>

      {COLOR_TOKEN_GROUPS.map((group) => (
        <Card className="bg-surface" key={group.labelKey}>
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="grid gap-1">
                <CardTitle>{td(group.labelKey)}</CardTitle>
                <CardDescription>{td(group.descriptionKey)}</CardDescription>
              </div>
              <Tag className="bg-fill-secondary text-xs font-extrabold">
                {group.tokens.length} {tm("preview.components.tokens")}
              </Tag>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {group.tokens.map((token) => (
                <Card
                  as="article"
                  className="grid gap-3"
                  key={token.name}
                  padding="sm"
                  variant="minimal"
                >
                  <div
                    aria-hidden="true"
                    className="h-20 rounded-sticker-lg border-2 border-ink shadow-sticker-sm"
                    style={{
                      background:
                        "preview" in token
                          ? token.preview
                          : `var(${token.name})`,
                    }}
                  />
                  <div className="grid gap-1">
                    <div className="text-sm font-black text-ink">
                      {td(token.labelKey)}
                    </div>
                    <code className="w-fit rounded-sticker-sm bg-surface-muted px-2 py-1 text-xs font-extrabold text-text-muted">
                      {token.name}
                    </code>
                    <div className="text-xs font-bold text-text-subtle">
                      {token.value}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export { ColorsPage }
