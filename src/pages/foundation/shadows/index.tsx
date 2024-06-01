import { usePreviewI18n } from "@/i18n/preview"

function ShadowsPage() {
  const { t } = usePreviewI18n()
  const samples = [
    "shadow-[3px_3px_0_#2E3038]",
    "shadow-[5px_5px_0_#2E3038]",
    "shadow-[8px_8px_0_#2E3038]",
  ]

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {samples.map((shadow, index) => (
        <div
          className={`rounded-[22px] border-[3px] border-[#2E3038] bg-white p-5 ${shadow}`}
          key={shadow}
        >
          <div className="mb-8 flex size-14 items-center justify-center rounded-[18px] border-[3px] border-[#2E3038] bg-[#FFE08A] text-2xl font-black">
            {index + 1}
          </div>
          <div className="font-extrabold">
            {t("Offset Level")} {index + 1}
          </div>
          <code className="mt-3 block rounded-[12px] border border-[#2E3038] bg-[#FFF6DC] p-3 text-xs font-semibold">
            {shadow}
          </code>
        </div>
      ))}
    </div>
  )
}

export { ShadowsPage }
