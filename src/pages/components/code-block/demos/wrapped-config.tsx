import { CodeBlock } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 20,
  titleKey: "preview.components.wrappedConfig",
  descriptionKey:
    "preview.components.codeBlockCanWrapLongConfigurationLinesInsideNarrowPanels",
})

function Demo() {
  return (
    <CodeBlock language="tsx" title="Registry import" tone="secondary" wrap>
      {`import { Button, Card, CodeBlock } from "sticker-ui"\n\nconst command = "pnpm dlx shadcn@latest add http://localhost:7777/r/code-block.json"`}
    </CodeBlock>
  )
}

export { Demo, meta }
