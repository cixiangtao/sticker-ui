import { Tag } from "sticker-ui"

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
  return (
    <div className="grid gap-6">
      <Card className="bg-fill-default-soft">
        <CardHeader divider="none">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="grid gap-2">
              <CardTitle>Color Tokens</CardTitle>
              <CardDescription>
                Complete color token inventory from tokens.css, grouped by
                purpose.
              </CardDescription>
            </div>
            <div className="border-ink bg-surface rounded-sticker-xl shadow-sticker-sm border-2 px-4 py-2 text-sm font-black">
              {COLOR_TOKEN_COUNT} tokens
            </div>
          </div>
        </CardHeader>
      </Card>

      {COLOR_TOKEN_GROUPS.map((group) => (
        <Card className="bg-surface" key={group.label}>
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="grid gap-1">
                <CardTitle>{group.label}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </div>
              <Tag className="bg-fill-secondary text-xs font-extrabold">
                {group.tokens.length} tokens
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
                    className="border-ink rounded-sticker-lg shadow-sticker-sm h-20 border-2"
                    style={{
                      background:
                        "preview" in token
                          ? token.preview
                          : `var(${token.name})`,
                    }}
                  />
                  <div className="grid gap-1">
                    <div className="text-ink text-sm font-black">
                      {token.label}
                    </div>
                    <code className="text-text-muted rounded-sticker-sm bg-surface-muted w-fit px-2 py-1 text-xs font-extrabold">
                      {token.name}
                    </code>
                    <div className="text-text-subtle text-xs font-bold">
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

export default ColorsPage
