import { CodeBlock } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.installCommand",
  descriptionKey:
    "preview.components.codeBlockPairsReadablePreformattedTextWithACopyAction",
})

function Demo() {
  return (
    <CodeBlock language="bash" title="Install Button">
      pnpm dlx shadcn@latest add http://localhost:7777/r/button.json
    </CodeBlock>
  )
}

export { Demo, meta }
