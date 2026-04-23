import { Card, Carousel, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  descriptionKey:
    "preview.components.carouselCombinesEmblaMotionWithStickerSlidesAndControls",
  order: 10,
  titleKey: "preview.components.featureCards",
})

const cards = [
  ["Registry", "Copy-ready source files for shadcn-style installs."],
  ["Preview", "Route-backed demos with source panels and API tables."],
  ["Tokens", "Paper, ink, accents, and hard shadows in one visual language."],
]

function Demo() {
  return (
    <Carousel className="w-full max-w-md">
      <Carousel.Content>
        {cards.map(([title, body]) => (
          <Carousel.Item key={title}>
            <Card className="bg-su-fill-secondary">
              <Card.Header>
                <Tag color="info" rounded="pill">
                  {title}
                </Tag>
                <Card.Title>{title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="m-0 text-sm leading-6 font-bold text-su-fg-muted">
                  {body}
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
