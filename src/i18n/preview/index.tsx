import i18n from "i18next"
import * as React from "react"
import {
  I18nextProvider,
  initReactI18next,
  useTranslation,
} from "react-i18next"

import {
  createPreviewResources,
  type MessageKeys,
  PREVIEW_LANGUAGES,
  type PreviewLanguage,
} from "./messages"
import { PREVIEW_MESSAGES } from "./zh"

type PreviewMessageKey = MessageKeys<typeof PREVIEW_MESSAGES>

interface PreviewI18nProviderProps {
  children: React.ReactNode
}

const PREVIEW_RESOURCES = createPreviewResources(PREVIEW_MESSAGES)
const MISSING_PREVIEW_MESSAGE_KEY = "[missing preview message key]"

i18n.use(initReactI18next).init({
  defaultNS: "preview",
  fallbackLng: "zh",
  interpolation: {
    escapeValue: false,
  },
  lng: "zh",
  ns: ["preview"],
  resources: Object.fromEntries(
    PREVIEW_LANGUAGES.map((language) => [
      language,
      {
        preview: PREVIEW_RESOURCES[language],
      },
    ]),
  ),
  returnNull: false,
})

function PreviewI18nProvider({ children }: PreviewI18nProviderProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <PreviewLanguageSync />
      {children}
    </I18nextProvider>
  )
}

function usePreviewI18n() {
  const { i18n: i18nInstance, t } = useTranslation("preview")
  const language = toPreviewLanguage(i18nInstance.resolvedLanguage)

  return {
    td: (key: string | undefined) => translatePreviewMessage(t, key),
    language,
    tm: (key: PreviewMessageKey | undefined) => translatePreviewMessage(t, key),
  }
}

function translatePreviewMessage(
  translate: (key: string) => string,
  key: string | undefined,
) {
  return key ? translate(key) : MISSING_PREVIEW_MESSAGE_KEY
}

function PreviewLanguageSync() {
  const { i18n: i18nInstance } = useTranslation("preview")
  const language = toPreviewLanguage(i18nInstance.resolvedLanguage)

  React.useEffect(() => {
    document.documentElement.lang = getDocumentLanguage(language)
  }, [language])

  return null
}

function toPreviewLanguage(
  language: null | string | undefined,
): PreviewLanguage {
  return PREVIEW_LANGUAGES.includes(language as PreviewLanguage)
    ? (language as PreviewLanguage)
    : "zh"
}

function getDocumentLanguage(language: PreviewLanguage) {
  return language === "zh" ? "zh-CN" : language
}

export {
  PreviewI18nProvider,
  type PreviewLanguage,
  type PreviewMessageKey,
  usePreviewI18n,
}
