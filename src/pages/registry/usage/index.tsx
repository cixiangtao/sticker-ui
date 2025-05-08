import { usePreviewI18n } from "@/i18n/preview"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/layouts/preview"
import { COMPONENT_FILES } from "@/preview-data"

function RegistryPage() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-5">
      <Card className="bg-su-fill-info">
        <CardHeader>
          <CardTitle>{tm("preview.components.installCommands")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.thesePathsComeFromTheGeneratedFilesInPublicRAfterRunningTheShadcnRegistryBuild",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {COMPONENT_FILES.map((file) => (
              <code
                className="block overflow-x-auto rounded-su-lg border border-su-ink bg-su-surface p-4 text-sm font-bold"
                key={file.name}
              >
                {tm("preview.components.npxShadcnLatestAdd")}
                {file.registry}
              </code>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-su-fill-warning">
        <CardHeader>
          <CardTitle>{tm("preview.components.buildFlow")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.editRegistrySourceBuildJsonThenPublishPublicRAsStaticFiles",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "registry source",
              "npm run build:registry",
              "public/r/*.json",
            ].map((step, index) => (
              <div
                className="rounded-su-xl border-2 border-su-ink bg-su-surface p-4 shadow-su-sm"
                key={step}
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-su-sm border-2 border-su-ink bg-su-fill-secondary font-black">
                  {index + 1}
                </div>
                <div className="font-extrabold">{step}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export { RegistryPage }
