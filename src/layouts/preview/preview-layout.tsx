import { Link, Outlet, useLocation } from "@tanstack/react-router"
import { Button, Card, CardContent, CardHeader, Tag } from "sticker-ui"

import { type PreviewLanguage, usePreviewI18n } from "../../i18n/preview"
import {
  findNavItemByPath,
  NAV_GROUPS,
  type NavItem,
  type RouteId,
} from "../../preview-data"
import "./preview-layout.css"

function PreviewLayout() {
  const location = useLocation()
  const { t } = usePreviewI18n()
  const activeItem = findNavItemByPath(location.pathname)

  return (
    <main className="bg-canvas bg-sticker-grid text-ink min-h-screen px-4 py-4 sm:px-6 lg:h-screen lg:overflow-hidden lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:h-full lg:min-h-0">
        <TopBar activeItem={activeItem} />
        <div className="grid gap-4 lg:min-h-0 lg:flex-1 lg:grid-cols-[280px_minmax(0,1fr)]">
          <Sidebar activeRoute={activeItem.id} />
          <Card as="section" className="overflow-auto" variant="panel">
            <CardHeader decoration divider="dashed" dividerInset="card">
              <div>
                <div className="text-text-subtle text-xs font-extrabold uppercase">
                  {t("Preview Route")}
                </div>
                <h1 className="mt-1 text-5xl leading-none font-black">
                  {activeItem.label}
                </h1>
                <p className="text-text-muted mt-3 max-w-2xl text-sm leading-6 font-medium">
                  {t(activeItem.description)}
                </p>
              </div>
              <Tag as="code" color="warning" variant="solid">
                #{activeItem.path}
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

function Sidebar({ activeRoute }: { activeRoute: RouteId }) {
  const { t } = usePreviewI18n()

  return (
    <Card
      as="aside"
      className="min-w-0 overflow-hidden lg:min-h-0 lg:self-stretch lg:overflow-y-auto"
      variant="panel"
    >
      <nav
        aria-label={t("Preview routes")}
        className="flex w-full min-w-0 gap-3 overflow-x-auto lg:flex-col lg:overflow-visible"
      >
        {NAV_GROUPS.map((group) => (
          <div className="min-w-[220px] lg:min-w-0" key={group.label}>
            <h3 className="text-text mb-2 text-xl font-extrabold uppercase">
              {t(group.label)}
            </h3>
            <div className="flex flex-col gap-2">
              {group.items.map((item) => (
                <Card
                  asChild
                  className={[
                    "rounded-sticker-lg border-ink border-2 px-3 py-3 transition hover:-translate-y-0.5",
                    activeRoute === item.id
                      ? "bg-fill-default shadow-sticker-md"
                      : "bg-surface shadow-sticker-xs",
                  ].join(" ")}
                  interactive
                  key={item.id}
                >
                  <Link
                    aria-current={activeRoute === item.id ? "page" : undefined}
                    to={item.path}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-extrabold">{item.label}</span>
                      <Tag color="secondary" size="sm" variant="soft">
                        {t(item.status)}
                      </Tag>
                    </span>
                    <span className="text-text-subtle mt-1 block text-xs leading-5 font-medium">
                      {t(item.description)}
                    </span>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </Card>
  )
}

function TopBar({ activeItem }: { activeItem: NavItem }) {
  const { language, setLanguage, t } = usePreviewI18n()

  return (
    <Card
      as="header"
      className="bg-fill-default flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
      variant="panel"
    >
      <Link className="group flex items-center gap-3" to="/">
        <span className="rounded-sticker-lg border-sticker-heavy border-ink bg-surface shadow-sticker-lg flex size-12 -rotate-3 items-center justify-center text-xl font-black transition group-hover:rotate-3">
          S
        </span>
        <div>
          <div className="text-2xl leading-none font-black">sticker-ui</div>
          <div className="text-text-muted mt-1 text-sm font-bold">
            {t("Previewing")} {activeItem.label}
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap items-center justify-end gap-2">
        {[
          {
            label: "EN",
            value: "en",
          },
          {
            label: "中文",
            value: "zh",
          },
        ].map((item) => (
          <LanguageButton
            key={item.value}
            language={item.value as PreviewLanguage}
            selectedLanguage={language}
            setLanguage={setLanguage}
          >
            {item.label}
          </LanguageButton>
        ))}
      </div>
    </Card>
  )
}

function LanguageButton({
  children,
  language,
  selectedLanguage,
  setLanguage,
}: {
  children: string
  language: PreviewLanguage
  selectedLanguage: PreviewLanguage
  setLanguage: (language: PreviewLanguage) => void
}) {
  const isSelected = language === selectedLanguage

  return (
    <Button
      aria-pressed={isSelected}
      color={isSelected ? "secondary" : "default"}
      onClick={() => setLanguage(language)}
      size="sm"
      variant={isSelected ? "solid" : "outlined"}
    >
      {children}
    </Button>
  )
}

export { PreviewLayout }
