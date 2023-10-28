import { type CSSProperties, useEffect, useState } from "react"
import {
  type BundledLanguage,
  type BundledTheme,
  createHighlighter,
  type ThemedToken,
} from "shiki"

interface SourceCode {
  code: string
  language: BundledLanguage
}

interface SourceCodeBlockProps {
  className?: string
  source: SourceCode
}

interface HighlightedSource {
  backgroundColor?: string
  color?: string
  lines: ThemedToken[][]
}

const SHIKI_LANGUAGE = "tsx" satisfies BundledLanguage
const SHIKI_THEME = "github-light-default" satisfies BundledTheme
const highlighterPromise = createHighlighter({
  langs: [SHIKI_LANGUAGE],
  themes: [SHIKI_THEME],
})

function SourceCodeBlock({ className = "", source }: SourceCodeBlockProps) {
  const highlightedSource = useHighlightedSource(source)

  return (
    <pre
      className={["text-[13px] leading-6 text-[#FFF7DF]", className].join(" ")}
      style={{
        backgroundColor: highlightedSource?.backgroundColor,
        color: highlightedSource?.color,
      }}
    >
      <code>
        {highlightedSource
          ? highlightedSource.lines.map((line, lineIndex) => (
              <span className="block min-h-6" key={lineIndex}>
                {line.map((token, tokenIndex) => (
                  <span key={tokenIndex} style={getTokenStyle(token)}>
                    {token.content}
                  </span>
                ))}
              </span>
            ))
          : source.code}
      </code>
    </pre>
  )
}

function useHighlightedSource(source: SourceCode) {
  const [highlightedSource, setHighlightedSource] =
    useState<HighlightedSource>()

  useEffect(() => {
    let isMounted = true

    async function highlightSource() {
      const highlighter = await highlighterPromise
      const result = highlighter.codeToTokens(source.code, {
        lang: source.language,
        theme: SHIKI_THEME,
      })

      if (!isMounted) {
        return
      }

      setHighlightedSource({
        backgroundColor: result.bg,
        color: result.fg,
        lines: result.tokens,
      })
    }

    setHighlightedSource(undefined)
    void highlightSource()

    return () => {
      isMounted = false
    }
  }, [source])

  return highlightedSource
}

function getTokenStyle(token: ThemedToken): CSSProperties {
  return {
    color: token.color,
  }
}

export { SourceCodeBlock }
export type { SourceCode }
