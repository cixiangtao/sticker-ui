import { type ComponentType, useState } from "react"
import { Button, Tag } from "sticker-ui"

import { type PreviewMessageKey, usePreviewI18n } from "../../i18n/preview"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./preview-card"
import { type SourceCode, SourceCodeBlock } from "./preview-source"

interface PreviewExampleProps {
  component: ComponentType
  meta: PreviewDemoMeta
  source: SourceCode
  sourcePath: string
}

interface PreviewDemoMeta {
  className?: string
  description: string
  descriptionKey: PreviewMessageKey
  order?: number
  title: string
  titleKey: PreviewMessageKey
}

interface PreviewDemoModule {
  Demo: ComponentType
  meta: PreviewDemoMeta
}

function defineMeta(meta: PreviewDemoMeta) {
  return meta
}

function PreviewExample({
  component: Demo,
  meta,
  source,
  sourcePath,
}: PreviewExampleProps) {
  const [isSourceOpen, setIsSourceOpen] = useState(false)
  const { tm } = usePreviewI18n()

  return (
    <Card className={meta.className}>
      <CardHeader>
        <CardTitle>{tm(meta.titleKey)}</CardTitle>
        <CardDescription>{tm(meta.descriptionKey)}</CardDescription>
      </CardHeader>
      <CardContent>
        <Demo />
        <Card>
          <CardHeader className="bg-fill-secondary">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="text-xs font-extrabold text-[#3D5F52] uppercase">
                  {tm("preview.components.exampleCode")}
                </div>
                <Tag as="code" color="default" variant="solid">
                  {sourcePath}
                </Tag>
              </div>
              <Button
                aria-expanded={isSourceOpen}
                color="default"
                onClick={() => setIsSourceOpen((current) => !current)}
                size="sm"
                type="button"
                variant="outlined"
              >
                {isSourceOpen
                  ? tm("preview.components.hideCode")
                  : tm("preview.components.showCode")}
              </Button>
            </div>
          </CardHeader>
          {isSourceOpen ? (
            <CardContent className="max-h-[360px] overflow-auto">
              <SourceCodeBlock source={source} />
            </CardContent>
          ) : null}
        </Card>
      </CardContent>
    </Card>
  )
}

export { defineMeta, PreviewExample }
export type { PreviewDemoMeta, PreviewDemoModule }
