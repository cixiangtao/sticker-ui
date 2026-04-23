import { Carousel, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  descriptionKey:
    "preview.components.carouselOrientationSwitchesTheEmblaAxisAndControlPlacement",
  order: 20,
  titleKey: "preview.components.verticalCarousel",
})

const steps = ["Plan", "Build", "Review"]

function Demo() {
  return (
    <Carousel
      className="h-72 w-full max-w-sm"
      orientation="vertical"
      opts={{ align: "start" }}
    >
      <Carousel.Content className="h-72">
        {steps.map((step, index) => (
          <Carousel.Item className="basis-1/2" key={step}>
            <div className="grid h-full place-items-center rounded-su-2xl border-2 border-su-ink bg-su-paper p-5 text-center shadow-su-md">
              <Tag color="info" rounded="pill">
                Step {index + 1}
              </Tag>
              <div className="text-3xl font-black">{step}</div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel>
  )
}

export { Demo, meta }
