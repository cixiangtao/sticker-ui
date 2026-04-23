import { CopyButton } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.copySnippet",
  descriptionKey:
    "preview.components.copyButtonProvidesACompactClipboardActionForCommandsAndTokens",
})

function Demo() {
  return (
    <div className="flex items-center gap-3 rounded-su-xl border-2 border-su-ink bg-su-paper p-3 shadow-su-sm">
      <code className="font-mono text-sm font-bold">
        pnpm dlx shadcn@latest add button
      </code>
      <CopyButton copyText="pnpm dlx shadcn@latest add button" />
    </div>
  )
}

export { Demo, meta }
