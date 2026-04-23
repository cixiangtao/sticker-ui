import { CodeBlock } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  descriptionKey:
    "preview.components.codeBlockSizeToneCopyAndWrapOptionsCoverCommandsAndConfigSnippets",
  order: 30,
  titleKey: "preview.components.sizesAndCopy",
})

const wrappedConfig = `export const previewConfig = {
  route: "/components/code-block",
  source: "src/components/ui/code-block.tsx"
}`

function Demo() {
  return (
    <div className="grid w-full max-w-2xl gap-4">
      <CodeBlock language="bash" size="sm" title="Compact command" tone="info">
        pnpm dlx shadcn@latest add https://sticker-ui.dev/r/button.json
      </CodeBlock>
      <CodeBlock
        language="ts"
        showCopy={false}
        title="Wrapped config"
        tone="secondary"
        wrap
      >
        {wrappedConfig}
      </CodeBlock>
    </div>
  )
}

export { Demo, meta }
