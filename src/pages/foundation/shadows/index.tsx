import { usePreviewI18n } from "@/i18n/preview"

function ShadowsPage() {
  const { tm } = usePreviewI18n()
  const samples = ["shadow-su-md", "shadow-su-xl", "shadow-su-2xl"]

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {samples.map((shadow, index) => (
        <div
          className={`rounded-su-2xl border-[3px] border-su-ink bg-su-surface p-5 ${shadow}`}
          key={shadow}
        >
          <div className="mb-8 flex size-14 items-center justify-center rounded-su-xl border-[3px] border-su-ink bg-su-fill-default text-2xl font-black">
            {index + 1}
          </div>
          <div className="font-extrabold">
            {tm("preview.components.offsetLevel")} {index + 1}
          </div>
          <code className="mt-3 block rounded-su-sm border border-su-ink bg-su-fill-warning p-3 text-xs font-semibold">
            {shadow}
          </code>
        </div>
      ))}
    </div>
  )
}

export { ShadowsPage }
