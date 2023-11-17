import { Card, CardContent } from "@/layouts/preview"
import { COLOR_SWATCHES } from "@/preview-data"

function ColorsPage() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {COLOR_SWATCHES.map((color) => (
        <Card className="bg-white" key={color.name}>
          <CardContent>
            <div
              className={`mb-4 h-24 rounded-[18px] border-[2px] border-[#2E3038] shadow-[3px_3px_0_#2E3038] ${color.className}`}
            />
            <div className="font-extrabold">{color.name}</div>
            <div className="mt-1 text-sm font-medium text-[#696B76]">
              {color.value}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ColorsPage
