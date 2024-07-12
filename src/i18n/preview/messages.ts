const PREVIEW_LANGUAGES = ["zh"] as const

type PreviewLanguage = (typeof PREVIEW_LANGUAGES)[number]
type MessageLeaf = Record<PreviewLanguage, string>
type MessageMap = Record<string, MessageLeaf>
type ValidMessageLeaf<TMessage> =
  TMessage extends Record<string, unknown>
    ? PreviewLanguage extends keyof TMessage
      ? Exclude<keyof TMessage, PreviewLanguage> extends never
        ? MessageLeaf
        : never
      : never
    : never

type ValidMessageMap<TMessages> = {
  [Key in keyof TMessages]: ValidMessageLeaf<TMessages[Key]>
}

type MessageKeys<TMessages> = keyof TMessages & string

type PreviewResources = Record<PreviewLanguage, Record<string, string>>

function defineMessages<const TMessages extends Record<string, unknown>>(
  messages: TMessages & ValidMessageMap<TMessages>,
) {
  return messages
}

function createPreviewResources(messages: MessageMap) {
  const resources = Object.fromEntries(
    PREVIEW_LANGUAGES.map((language) => [language, {}]),
  ) as PreviewResources

  for (const [key, message] of Object.entries(messages)) {
    for (const language of PREVIEW_LANGUAGES) {
      resources[language][key] = message[language]
    }
  }

  return resources
}

export { PREVIEW_LANGUAGES, createPreviewResources, defineMessages }
export type { MessageKeys, PreviewLanguage }
