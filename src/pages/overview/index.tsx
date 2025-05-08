import { Divider } from "@/components/ui/divider"
import { usePreviewI18n } from "@/i18n/preview"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/layouts/preview"
import { NAV_GROUPS, resolvePreviewLabel } from "@/preview-data"

function OverviewPage() {
  const { td, tm } = usePreviewI18n()

  return (
    <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
      <Card className="bg-su-fill-info">
        <CardHeader>
          <CardTitle>{tm("preview.components.previewArchitecture")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.thePreviewIsGroupedByDocumentationJobsStartFoundationsComponentsAndRegistryDelivery",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {NAV_GROUPS.map((group) => (
              <div
                className="rounded-su-xl border-2 border-l-[8px] border-su-ink bg-su-surface p-4"
                key={group.id}
              >
                <div className="text-xs font-extrabold text-su-fg-subtle uppercase">
                  {td(group.labelKey)}
                </div>
                <div className="mt-3 flex flex-col gap-3">
                  {group.sections.map((section) => (
                    <div className="flex flex-col gap-2" key={section.id}>
                      {group.sections.length > 1 ? (
                        <Divider variant="dashed" tone="warning">
                          {td(section.labelKey)}
                        </Divider>
                      ) : null}
                      {section.items.map((item) => (
                        <a
                          className="rounded-su-sm border border-su-ink bg-su-paper px-3 py-2 text-sm font-extrabold transition hover:-translate-y-0.5"
                          href={`#${item.path}`}
                          key={item.path}
                        >
                          {resolvePreviewLabel(item, td)}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-su-fill-warning">
        <CardHeader>
          <CardTitle>{tm("preview.components.dependencyContract")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.viteAndReactDomArePreviewOnlyInstalledRegistryComponentsStaySourceFirstAndLight",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {["peer: react", "peer: tailwindcss", "dev: vite preview"].map(
              (item) => (
                <div
                  className="rounded-su-lg border-2 border-su-ink bg-su-surface px-4 py-3 font-extrabold shadow-su-sm"
                  key={item}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export { OverviewPage }
