import { Card, Carousel, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-paper",
  descriptionKey:
    "preview.components.carouselOptionsCanShowPeekingSlidesForCardBrowsers",
  order: 30,
  titleKey: "preview.components.peekOptions",
})

const items = ["Forms", "Overlay", "Feedback", "Data"]

function Demo() {
  return (
    <Carousel className="w-full max-w-2xl" opts={{ align: "start" }}>
      <Carousel.Content>
        {items.map((item) => (
          <Carousel.Item className="basis-4/5 sm:basis-1/2" key={item}>
            <Card className="bg-su-fill-secondary">
              <Card.Header>
                <Tag color="secondary" rounded="pill">
                  {item}
                </Tag>
                <Card.Title>{item} set</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="m-0 text-sm leading-6 font-bold text-su-fg-muted">
                  Peeking slides make the carousel feel browseable without
                  hiding the next item.
                </p>
              </Card.Content>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel>
  )
}

export { Demo, meta }
