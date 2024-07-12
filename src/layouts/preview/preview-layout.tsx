import { Link, Outlet, useLocation } from "@tanstack/react-router"
import { useLayoutEffect } from "react"
import { Card, CardContent, CardHeader, Divider, Tag } from "sticker-ui"

import { type PreviewMessageKey, usePreviewI18n } from "../../i18n/preview"
import { NAV_GROUPS } from "../../preview-data"
import { useCurrentRoute } from "../../router/hooks"

import "./preview-layout.css"

const PREVIEW_CONTENT_SCROLL_SELECTOR = "[data-preview-content-scroll]"

function PreviewLayout() {
  const location = useLocation()
  const { tm } = usePreviewI18n()
  const currentRoute = useCurrentRoute()
  const activeRoute = {
    description: currentRoute?.meta?.description ?? "",
    descriptionKey: currentRoute?.meta?.descriptionKey,
    label: currentRoute?.meta?.title ?? "",
    labelKey: currentRoute?.meta?.titleKey,
    path: currentRoute?.pathname ?? location.pathname,
  }

  useLayoutEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>(
      PREVIEW_CONTENT_SCROLL_SELECTOR,
    )

    scrollContainer?.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <main className="bg-sticker-grid min-h-screen bg-canvas px-4 py-4 text-ink sm:px-6 lg:h-screen lg:overflow-hidden lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:h-full lg:min-h-0">
        <TopBar activeRoute={activeRoute} />
        <div className="grid gap-4 lg:min-h-0 lg:flex-1 lg:grid-cols-[280px_minmax(0,1fr)]">
          <Sidebar activePath={activeRoute.path} />
          <Card
            as="section"
            className="min-h-0 overflow-auto"
            data-preview-content-scroll
            variant="panel"
          >
            <CardHeader decoration divider="dashed" dividerInset="card">
              <div>
                <div className="text-xs font-extrabold text-text-subtle uppercase">
                  {tm("preview.route.eyebrow")}
                </div>
                <h1 className="mt-1 text-5xl leading-none font-black">
                  {translatePreviewKey(
                    tm,
                    activeRoute.labelKey,
                    activeRoute.label,
                  )}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 font-medium text-text-muted">
                  {translatePreviewKey(
                    tm,
                    activeRoute.descriptionKey,
                    activeRoute.description,
                  )}
                </p>
              </div>
              <Tag as="code" color="warning" variant="solid">
                #{activeRoute.path}
              </Tag>
            </CardHeader>
            <CardContent>
              <Outlet />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

function Sidebar({ activePath }: { activePath: string }) {
  const { tm } = usePreviewI18n()

  return (
    <Card
      as="aside"
      className="min-w-0 overflow-hidden lg:min-h-0 lg:self-stretch lg:overflow-y-auto"
      variant="panel"
    >
      <nav
        aria-label={tm("preview.route.navigationLabel")}
        className="flex w-full min-w-0 gap-3 overflow-x-auto lg:flex-col lg:overflow-visible"
      >
        {NAV_GROUPS.map((group) => (
          <div className="min-w-[240px] lg:min-w-0" key={group.label}>
            <div className="mb-2 flex items-center justify-start gap-3">
              <h3 className="text-text text-xl font-extrabold uppercase">
                {translatePreviewKey(tm, group.labelKey, group.label)}
              </h3>
              {/* <Tag color="default" size="xs" variant="outlined">
                {group.items.length}
              </Tag> */}
            </div>
            <div className="flex flex-col gap-4">
              {group.sections.map((section) => (
                <div className="flex flex-col gap-2" key={section.label}>
                  {group.sections.length > 1 ? (
                    <div className="grid gap-1">
                      <Divider align="start" tone="warning" variant="dashed">
                        <span className="inline-flex items-center gap-2">
                          <span>
                            {translatePreviewKey(
                              tm,
                              section.labelKey,
                              section.label,
                            )}
                          </span>
                          {/* <span className="text-text-subtle">
                            {section.items.length}
                          </span> */}
                        </span>
                      </Divider>
                    </div>
                  ) : null}
                  {section.items.map((item) => (
                    <Card
                      asChild
                      className={[
                        "rounded-sticker-lg border-ink border-2 px-3 py-3 transition hover:-translate-y-0.5",
                        activePath === item.path
                          ? "bg-fill-default shadow-sticker-md"
                          : "bg-surface shadow-sticker-xs",
                      ].join(" ")}
                      interactive
                      key={item.path}
                      padding="sm"
                    >
                      <Link
                        aria-current={
                          activePath === item.path ? "page" : undefined
                        }
                        resetScroll={false}
                        to={item.path}
                      >
                        <span className="font-extrabold">
                          {translatePreviewKey(tm, item.labelKey, item.label)}
                        </span>
                        <span className="mt-1 block text-xs leading-5 font-medium text-text-subtle">
                          {translatePreviewKey(
                            tm,
                            item.descriptionKey,
                            item.description,
                          )}
                        </span>
                      </Link>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </Card>
  )
}

function TopBar({
  activeRoute,
}: {
  activeRoute: { label: string; labelKey?: string }
}) {
  const { tm } = usePreviewI18n()

  return (
    <Card
      as="header"
      className="flex flex-col gap-4 bg-fill-default lg:flex-row lg:items-center lg:justify-between"
      variant="panel"
    >
      <Link className="group flex items-center gap-3" to="/">
        <span className="flex size-12 -rotate-3 items-center justify-center rounded-sticker-lg border-sticker-heavy border-ink bg-surface text-xl font-black shadow-sticker-lg transition group-hover:rotate-3">
          S
        </span>
        <div>
          <div className="text-2xl leading-none font-black">sticker-ui</div>
          <div className="mt-1 text-sm font-bold text-text-muted">
            {tm("preview.route.previewing")}{" "}
            {translatePreviewKey(tm, activeRoute.labelKey, activeRoute.label)}
          </div>
        </div>
      </Link>
    </Card>
  )
}

function translatePreviewKey(
  tm: (key: PreviewMessageKey) => string,
  key: string | undefined,
  fallback: string,
) {
  return key ? tm(key as PreviewMessageKey) : fallback
}

export { PreviewLayout }
