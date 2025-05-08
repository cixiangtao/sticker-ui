import type { ComponentProps } from "react"
import {
  Card as StickerCard,
  CardContent as StickerCardContent,
  CardDescription as StickerCardDescription,
  CardFooter as StickerCardFooter,
  CardHeader as StickerCardHeader,
  CardTitle as StickerCardTitle,
} from "sticker-ui"

import { cn } from "../../lib/utils"

function Card({
  children,
  className,
  ...props
}: ComponentProps<typeof StickerCard>) {
  return (
    <StickerCard
      as="div"
      className={cn("bg-su-surface", className)}
      data-slot="preview-card"
      {...props}
    >
      {children}
    </StickerCard>
  )
}

function CardContent({
  className,
  ...props
}: ComponentProps<typeof StickerCardContent>) {
  return (
    <StickerCardContent
      className={cn("p-5", className)}
      data-slot="preview-card-content"
      {...props}
    />
  )
}

function CardDescription({
  className,
  ...props
}: ComponentProps<typeof StickerCardDescription>) {
  return (
    <StickerCardDescription
      className={cn("text-su-ink/70", className)}
      data-slot="preview-card-description"
      {...props}
    />
  )
}

function CardFooter({
  className,
  ...props
}: ComponentProps<typeof StickerCardFooter>) {
  return (
    <StickerCardFooter
      className={cn("items-center gap-3", className)}
      data-slot="preview-card-footer"
      {...props}
    />
  )
}

function CardHeader({
  className,
  ...props
}: ComponentProps<typeof StickerCardHeader>) {
  return (
    <StickerCardHeader
      className={cn("bg-transparent", className)}
      data-slot="preview-card-header"
      {...props}
    />
  )
}

function CardTitle({
  className,
  ...props
}: ComponentProps<typeof StickerCardTitle>) {
  return (
    <StickerCardTitle
      className={cn("font-display", className)}
      data-slot="preview-card-title"
      {...props}
    />
  )
}

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
