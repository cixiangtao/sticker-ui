import { type CSSProperties, useEffect, useState } from "react"
import {
  type LanguageRegistration,
  type ThemedToken,
  type ThemeRegistration,
} from "shiki/core"

interface SourceCode {
  code: string
  language: "tsx"
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

const SHIKI_LANGUAGE = "tsx"
const SHIKI_THEME = "github-light-default"

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
      const highlighter = await getHighlighter()
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

function getHighlighter() {
  highlighterPromise ??= createPreviewHighlighter()
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

function getTokenStyle(token: ThemedToken): CSSProperties {
  return {
    color: token.color,
  }
}

export { SourceCodeBlock }
export type { SourceCode }
