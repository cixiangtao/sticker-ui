import { type CSSProperties, useEffect, useMemo, useState } from "react"
import {
  type LanguageRegistration,
  type ThemedToken,
  type ThemeRegistration,
} from "shiki/core"

import { cn } from "../../lib/utils"

interface SourceCode {
  code: string
  language: "tsx"
}

interface SourceCodeBlockProps {
  className?: string
  source: SourceCode
}

interface HighlightedToken {
  color?: string
  content: string
}

interface HighlightedLine {
  tokens: HighlightedToken[]
}

type HighlightState =
  | { status: "error" }
  | { status: "loading" }
  | { color?: string; lines: HighlightedLine[]; status: "ready" }

const SHIKI_LANGUAGE = "tsx"
const SHIKI_THEME = "github-light-default"
const SOURCE_CODE_BLOCK_CLASS_NAME =
  "overflow-x-auto rounded-sticker-lg border border-ink bg-paper p-4 font-mono text-[13px] leading-6 text-ink shadow-sticker-xs"
const SOURCE_CODE_BLOCK_STYLE = {
  tabSize: 2,
} satisfies CSSProperties
const ERROR_HIGHLIGHT_STATE = {
  status: "error",
} satisfies HighlightState
const LOADING_HIGHLIGHT_STATE = {
  status: "loading",
} satisfies HighlightState

interface PreviewHighlighter {
  codeToTokens: (
    code: string,
    options: {
      lang: typeof SHIKI_LANGUAGE
      theme: typeof SHIKI_THEME
    },
  ) => {
    bg?: string
    fg?: string
    tokens: ThemedToken[][]
  }
}

let highlighterPromise: Promise<PreviewHighlighter> | undefined

function SourceCodeBlock({ className = "", source }: SourceCodeBlockProps) {
  const highlightState = useHighlightedSource(source)
  const plainLines = useMemo(
    () => getPlainSourceLines(source.code),
    [source.code],
  )
  const lines =
    highlightState.status === "ready" ? highlightState.lines : plainLines

  return (
    <pre
      className={cn(SOURCE_CODE_BLOCK_CLASS_NAME, className)}
      data-name="SourceCodeBlock"
      data-slot="root"
      data-state={highlightState.status}
      style={getSourceBlockStyle(highlightState)}
    >
      <code aria-busy={isSourceBusy(highlightState)} data-slot="code">
        {lines.map((line, lineIndex) => (
          <span className="block min-h-6" data-slot="line" key={lineIndex}>
            {line.tokens.map((token, tokenIndex) => (
              <span key={tokenIndex} style={getTokenStyle(token)}>
                {token.content}
              </span>
            ))}
          </span>
        ))}
      </code>
    </pre>
  )
}

function useHighlightedSource(source: SourceCode) {
  const [highlightState, setHighlightState] = useState<HighlightState>(
    LOADING_HIGHLIGHT_STATE,
  )

  useEffect(() => {
    let isMounted = true

    async function highlightSource() {
      try {
        const highlighter = await getHighlighter()
        const result = highlighter.codeToTokens(source.code, {
          lang: source.language,
          theme: SHIKI_THEME,
        })

        if (!isMounted) {
          return
        }

        setHighlightState({
          color: result.fg,
          lines: getHighlightedLines(result.tokens),
          status: "ready",
        })
      } catch (error) {
        console.error("Failed to highlight preview source.", error)

        if (isMounted) {
          setHighlightState(ERROR_HIGHLIGHT_STATE)
        }
      }
    }

    setHighlightState(LOADING_HIGHLIGHT_STATE)
    void highlightSource()

    return () => {
      isMounted = false
    }
  }, [source.code, source.language])

  return highlightState
}

function getHighlighter() {
  highlighterPromise ??= createPreviewHighlighter().catch((error: unknown) => {
    highlighterPromise = undefined
    throw error
  })

  return highlighterPromise
}

async function createPreviewHighlighter() {
  const [
    { createHighlighterCore },
    { createJavaScriptRegexEngine },
    { default: tsx },
    { default: githubLightDefault },
  ] = await Promise.all([
    import("shiki/core"),
    import("shiki/engine/javascript"),
    import("shiki/langs/tsx.mjs"),
    import("shiki/themes/github-light-default.mjs"),
  ])

  return createHighlighterCore({
    engine: createJavaScriptRegexEngine(),
    langs: tsx as LanguageRegistration[],
    themes: [githubLightDefault as ThemeRegistration],
  })
}

function getHighlightedLines(lines: ThemedToken[][]): HighlightedLine[] {
  return lines.map((line) => ({
    tokens: line.map((token) => ({
      color: token.color,
      content: token.content,
    })),
  }))
}

function getPlainSourceLines(sourceCode: string): HighlightedLine[] {
  return sourceCode.split("\n").map((line) => ({
    tokens: [{ content: line }],
  }))
}

function getSourceBlockStyle(highlightState: HighlightState) {
  if (highlightState.status !== "ready" || !highlightState.color) {
    return SOURCE_CODE_BLOCK_STYLE
  }

  return {
    ...SOURCE_CODE_BLOCK_STYLE,
    color: highlightState.color,
  } satisfies CSSProperties
}

function getTokenStyle(token: HighlightedToken) {
  if (!token.color) {
    return undefined
  }

  return {
    color: token.color,
  } satisfies CSSProperties
}

function isSourceBusy(highlightState: HighlightState) {
  return highlightState.status === "loading" ? true : undefined
}

export { SourceCodeBlock }
export type { SourceCode }
