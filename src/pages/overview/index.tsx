import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/layouts/preview"
import { NAV_GROUPS } from "@/preview-data"

function OverviewPage() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
      <Card className="bg-[#EAF7FF]">
        <CardHeader>
          <CardTitle>Preview Architecture</CardTitle>
          <CardDescription>
            The preview is grouped by documentation jobs: start, foundations,
            components, and registry delivery.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {NAV_GROUPS.map((group) => (
              <div
                className="rounded-[18px] border-[2px] border-l-[8px] border-[#2E3038] bg-white p-4"
                key={group.label}
              >
                <div className="text-xs font-extrabold text-[#696B76] uppercase">
                  {group.label}
                </div>
                <div className="mt-3 flex flex-col gap-3">
                  {group.sections.map((section) => (
                    <div className="flex flex-col gap-2" key={section.label}>
                      {group.sections.length > 1 ? (
                        <div className="flex items-center justify-between rounded-[10px] border border-[#2E3038] bg-[#FFF6DC] px-3 py-1.5">
                          <span className="text-xs font-black uppercase">
                            {section.label}
                          </span>
                          <span className="text-xs font-extrabold text-[#696B76]">
                            {section.items.length}
                          </span>
                        </div>
                      ) : null}
                      {section.items.map((item) => (
                        <a
                          className="rounded-[12px] border border-[#2E3038] bg-[#FFFDF7] px-3 py-2 text-sm font-extrabold transition hover:-translate-y-0.5"
                          href={`#${item.path}`}
                          key={item.id}
                        >
                          {item.label}
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

      <Card className="bg-[#FFF6DC]">
        <CardHeader>
          <CardTitle>Dependency Contract</CardTitle>
          <CardDescription>
            Vite and React DOM are preview-only. Installed registry components
            stay source-first and light.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {["peer: react", "peer: tailwindcss", "dev: vite preview"].map(
              (item) => (
                <div
                  className="rounded-[16px] border-[2px] border-[#2E3038] bg-white px-4 py-3 font-extrabold shadow-[2px_2px_0_#2E3038]"
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
