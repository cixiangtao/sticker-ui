import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

import { Button } from "./button"

type CarouselApi = UseEmblaCarouselType[1]
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0]
type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1]

interface CarouselContextValue {
  api: CarouselApi
  canScrollNext: boolean
  canScrollPrev: boolean
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  orientation: "horizontal" | "vertical"
  scrollNext: () => void
  scrollPrev: () => void
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within <Carousel />")
  }

  return context
}

/**
 * Props for the sticker carousel root.
 */
interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Called when the Embla API is ready.
   */
  setApi?: (api: CarouselApi) => void
  /**
   * Embla carousel options.
   */
  opts?: CarouselOptions
  /**
   * Embla carousel plugins.
   */
  plugins?: CarouselPlugin
  /**
   * Controls carousel axis and keyboard navigation direction.
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical"
}

/**
 * Sticker carousel powered by Embla.
 */
function Carousel({
  children,
  className,
  opts,
  orientation = "horizontal",
  plugins,
  setApi,
  ...props
}: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((nextApi: CarouselApi) => {
    if (!nextApi) {
      return
    }

    setCanScrollPrev(nextApi.canScrollPrev())
    setCanScrollNext(nextApi.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  React.useEffect(() => {
    if (!api) {
      return
    }

    setApi?.(api)
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect, setApi])

  return (
    <CarouselContext.Provider
      value={{
        api,
        canScrollNext,
        canScrollPrev,
        carouselRef,
        orientation,
        scrollNext,
        scrollPrev,
      }}
    >
      <div
        aria-roledescription="carousel"
        className={cn("relative", className)}
        data-slot="carousel"
        role="region"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

/**
 * Carousel viewport and slide track.
 */
const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      className="overflow-hidden rounded-su-2xl"
      data-slot="carousel-viewport"
      ref={carouselRef}
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className,
        )}
        data-slot="carousel-content"
        ref={ref}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

/**
 * Carousel slide item.
 */
const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className,
      )}
      data-slot="carousel-item"
      ref={ref}
      role="group"
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

/**
 * Previous-slide carousel control.
 */
function CarouselPrevious({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const { canScrollPrev, orientation, scrollPrev } = useCarousel()

  return (
    <Button
      className={cn(
        "absolute size-10 p-0",
        orientation === "horizontal"
          ? "top-1/2 -left-5 -translate-y-1/2"
          : "-top-5 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      shape="square"
      variant="outlined"
      {...props}
    >
      <ArrowLeft aria-hidden="true" className="size-4 stroke-[3]" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}
CarouselPrevious.displayName = "CarouselPrevious"

/**
 * Next-slide carousel control.
 */
function CarouselNext({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const { canScrollNext, orientation, scrollNext } = useCarousel()

  return (
    <Button
      className={cn(
        "absolute size-10 p-0",
        orientation === "horizontal"
          ? "top-1/2 -right-5 -translate-y-1/2"
          : "-bottom-5 left-1/2 -translate-x-1/2 rotate-90",
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      shape="square"
      variant="outlined"
      {...props}
    >
      <ArrowRight aria-hidden="true" className="size-4 stroke-[3]" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}
CarouselNext.displayName = "CarouselNext"

const CarouselRoot = Object.assign(Carousel, {
  Content: CarouselContent,
  Item: CarouselItem,
  Next: CarouselNext,
  Previous: CarouselPrevious,
})

export {
  CarouselRoot as Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
  type CarouselOptions,
  type CarouselPlugin,
  type CarouselProps,
}
