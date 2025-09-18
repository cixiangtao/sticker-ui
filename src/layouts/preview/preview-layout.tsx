import { Link, Outlet, useLocation } from "@tanstack/react-router"
import { useLayoutEffect } from "react"
import { Card, Divider, Tag } from "sticker-ui"

import { usePreviewI18n } from "../../i18n/preview"
import { NAV_GROUPS, resolvePreviewLabel } from "../../preview-data"
import { useCurrentRoute } from "../../router/hooks"

const PREVIEW_CONTENT_SCROLL_SELECTOR = "[data-preview-content-scroll]"

function PreviewLayout() {
  const location = useLocation()
  const { td, tm } = usePreviewI18n()
  const currentRoute = useCurrentRoute()
  const currentRouteMeta = currentRoute?.meta
  const activeRoute = {
    descriptionKey: currentRouteMeta?.descriptionKey,
    label: currentRouteMeta?.title,
    labelKey: currentRouteMeta?.titleKey,
    path: currentRoute?.pathname ?? location.pathname,
  }

  useLayoutEffect(() => {
    const scrollContainer = document.querySelector<HTMLElement>(
      PREVIEW_CONTENT_SCROLL_SELECTOR,
    )

    scrollContainer?.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <main className="min-h-screen bg-su-canvas bg-[linear-gradient(90deg,rgb(46_48_56_/_0.04)_1px,transparent_1px),linear-gradient(0deg,rgb(46_48_56_/_0.04)_1px,transparent_1px)] bg-[length:28px_28px] px-4 py-4 text-su-ink sm:px-6 lg:h-screen lg:overflow-hidden lg:px-8">
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
            <Card.Header decoration divider="dashed" dividerInset="card">
              <div>
                <div className="text-xs font-extrabold text-su-fg-subtle uppercase">
                  {tm("preview.route.eyebrow")}
                </div>
                <h1 className="mt-1 text-5xl leading-none font-black">
                  {resolvePreviewLabel(activeRoute, td)}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 font-medium text-su-fg-muted">
                  {td(activeRoute.descriptionKey)}
                </p>
              </div>
              <Tag as="code" color="warning" variant="solid">
                #{activeRoute.path}
              </Tag>
            </Card.Header>
            <Card.Content>
              <Outlet />
            </Card.Content>
          </Card>
        </div>
      </div>
    </main>
  )
}

function Sidebar({ activePath }: { activePath: string }) {
  const { td, tm } = usePreviewI18n()

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
          <div className="min-w-[240px] lg:min-w-0" key={group.id}>
            <div className="mb-2 flex items-center justify-start gap-3">
              <h3 className="text-xl font-extrabold text-su-ink uppercase">
                {td(group.labelKey)}
              </h3>
              {/* <Tag color="default" size="xs" variant="outlined">
                {group.items.length}
              </Tag> */}
            </div>
            <div className="flex flex-col gap-4">
              {group.sections.map((section) => (
                <div className="flex flex-col gap-2" key={section.id}>
                  {group.sections.length > 1 ? (
                    <div className="grid gap-1">
                      <Divider align="start" tone="warning" variant="dashed">
                        <span className="inline-flex items-center gap-2">
                          <span>{td(section.labelKey)}</span>
                          {/* <span className="text-su-fg-subtle">
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
                        "rounded-su-lg border-su-ink border-2 px-3 py-3 transition hover:-translate-y-0.5",
                        activePath === item.path
                          ? "bg-su-fill-default shadow-su-md"
                          : "bg-su-surface shadow-su-xs",
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
                          {resolvePreviewLabel(item, td)}
                        </span>
                        <span className="mt-1 block text-xs leading-5 font-medium text-su-fg-subtle">
                          {td(item.descriptionKey)}
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
  activeRoute: { label?: string; labelKey?: string }
}) {
  const { td, tm } = usePreviewI18n()

  return (
    <Card
      as="header"
      className="flex flex-col gap-4 bg-su-fill-default lg:flex-row lg:items-center lg:justify-between"
      variant="panel"
    >
      <Link className="group flex items-center gap-3" to="/">
        <span className="flex size-12 -rotate-3 items-center justify-center rounded-su-lg border-[3px] border-su-ink bg-su-surface text-xl font-black shadow-su-lg transition group-hover:rotate-3">
          S
        </span>
        <div>
          <div className="text-2xl leading-none font-black">sticker-ui</div>
          <div className="mt-1 text-sm font-bold text-su-fg-muted">
            {tm("preview.route.previewing")}{" "}
            {resolvePreviewLabel(activeRoute, td)}
          </div>
        </div>
      </Link>
    </Card>
  )
}

export { PreviewLayout }
