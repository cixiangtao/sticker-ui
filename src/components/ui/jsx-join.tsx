import * as React from "react"

import { cn } from "@/lib/utils"

type JsxJoinSeparatorContext = {
  /**
   * The node before the separator.
   */
  before: React.ReactNode
  /**
   * Zero-based separator index.
   */
  index: number
  /**
   * The node after the separator.
   */
  after: React.ReactNode
}

type JsxJoinSeparator =
  | React.ReactNode
  | ((context: JsxJoinSeparatorContext) => React.ReactNode)

/**
 * Props for joining JSX children with a reusable separator.
 * @remarks Defaults to rendering a Fragment so it can be used inside text rows, lists, and component slots without extra DOM.
 */
interface JsxJoinProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Root element used to wrap the joined nodes.
   * @default React.Fragment
   */
  as?: React.ElementType
  /**
   * Child nodes to join.
   */
  children?: React.ReactNode
  /**
   * Removes null, undefined, boolean, and empty-string children before joining.
   * @default true
   */
  filterEmpty?: boolean
  /**
   * Separator node or render function inserted between each child.
   */
  separator?: JsxJoinSeparator
}

/**
 * Joins JSX children with a separator while preserving each child node.
 */
function JsxJoin({
  as: Component = React.Fragment,
  children,
  className,
  filterEmpty = true,
  separator = null,
  ...props
}: JsxJoinProps) {
  const items = React.Children.toArray(children).filter((child) =>
    filterEmpty ? isPresentChild(child) : true,
  )
  const joined = joinNodes(items, separator)

  if (Component === React.Fragment) {
    return <>{joined}</>
  }

  return (
    <Component className={cn(className)} data-slot="jsx-join" {...props}>
      {joined}
    </Component>
  )
}

function joinNodes(items: React.ReactNode[], separator: JsxJoinSeparator) {
  return items.flatMap((item, index) => {
    if (index === 0) {
      return [item]
    }

    const before = items[index - 1]
    const separatorNode =
      typeof separator === "function"
        ? separator({ after: item, before, index: index - 1 })
        : separator

    return [
      <React.Fragment key={`separator-${index}`}>
        {separatorNode}
      </React.Fragment>,
      item,
    ]
  })
}

function isPresentChild(child: React.ReactNode) {
  if (child === null || child === undefined || typeof child === "boolean") {
    return false
  }

  return !(typeof child === "string" && child.length === 0)
}

export {
  JsxJoin,
  type JsxJoinProps,
  type JsxJoinSeparator,
  type JsxJoinSeparatorContext,
}
