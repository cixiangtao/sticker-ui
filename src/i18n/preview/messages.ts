const PREVIEW_LANGUAGES = ["zh", "en"] as const

type PreviewLanguage = (typeof PREVIEW_LANGUAGES)[number]
type MessageLeaf = Partial<Record<PreviewLanguage, string>>
type MessageMap = Record<string, MessageLeaf>
type PreviewLanguageMessages = Record<string, string>
type PreviewLanguageResourceOverrides = Partial<
  Record<PreviewLanguage, PreviewLanguageMessages>
>
type ValidMessageLeaf<TMessage> =
  TMessage extends Record<string, unknown>
    ? Exclude<keyof TMessage, PreviewLanguage> extends never
      ? MessageLeaf
      : never
    : never

type ValidMessageMap<TMessages> = {
  [Key in keyof TMessages]: ValidMessageLeaf<TMessages[Key]>
}

type MessageKeys<TMessages> = keyof TMessages & string

type PreviewResources = Record<PreviewLanguage, PreviewLanguageMessages>

function defineMessages<const TMessages extends Record<string, unknown>>(
  messages: TMessages & ValidMessageMap<TMessages>,
) {
  return messages
}

function createPreviewResources(
  messages: MessageMap,
  overrides: PreviewLanguageResourceOverrides = {},
) {
  const resources = Object.fromEntries(
    PREVIEW_LANGUAGES.map((language) => [
      language,
      { ...(overrides[language] ?? {}) },
    ]),
  ) as PreviewResources

  for (const [key, message] of Object.entries(messages)) {
    for (const language of PREVIEW_LANGUAGES) {
      const value = message[language]

      if (value) {
        resources[language][key] = value
      }
    }
  }

  return resources
}

export { PREVIEW_LANGUAGES, createPreviewResources, defineMessages }
export type { MessageKeys, PreviewLanguage, PreviewLanguageMessages }
