import { type ComponentType, useState } from "react"
import { Button, Tag } from "sticker-ui"

import { usePreviewI18n } from "../../i18n/preview"
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
  title: string
}

interface PreviewDemoModule {
  default: PreviewDemoMeta
  Demo: ComponentType
}

function PreviewExample({
  component: Demo,
  meta,
  source,
  sourcePath,
}: PreviewExampleProps) {
  const [isSourceOpen, setIsSourceOpen] = useState(false)
  const { t } = usePreviewI18n()

  return (
    <Card className={meta.className}>
      <CardHeader>
        <CardTitle>{meta.title}</CardTitle>
        <CardDescription>{meta.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Demo />
        <Card>
          <CardHeader className="bg-fill-secondary">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <div className="text-xs font-extrabold text-[#3D5F52] uppercase">
                  {t("Example code")}
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
                {isSourceOpen ? t("Hide code") : t("Show code")}
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

export { PreviewExample }
export type { PreviewDemoMeta, PreviewDemoModule }
