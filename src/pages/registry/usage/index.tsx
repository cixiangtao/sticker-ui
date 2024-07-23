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
      <Card className="bg-[#EAF7FF]">
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
                className="block overflow-x-auto rounded-[16px] border border-[#2E3038] bg-white p-4 text-sm font-bold"
                key={file.name}
              >
                {tm("preview.components.npxShadcnLatestAdd")}
                {file.registry}
              </code>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#FFF6DC]">
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
                className="rounded-[18px] border-[2px] border-[#2E3038] bg-white p-4 shadow-[2px_2px_0_#2E3038]"
                key={step}
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-[12px] border-[2px] border-[#2E3038] bg-fill-secondary font-black">
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
