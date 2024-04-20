import i18n from "i18next"
import * as React from "react"
import {
  I18nextProvider,
  initReactI18next,
  useTranslation,
} from "react-i18next"

import { ZH_TRANSLATIONS } from "./zh"

type PreviewLanguage = "en" | "zh"

interface PreviewI18nProviderProps {
  children: React.ReactNode
}

const STORAGE_KEY = "sticker-ui-preview-language"

const TRANSLATABLE_PROP_NAMES = new Set([
  "aria-label",
  "defaultValue",
  "extra",
  "hideLabel",
  "label",
  "message",
  "placeholder",
  "showLabel",
  "title",
])

i18n.use(initReactI18next).init({
  defaultNS: "preview",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  lng: getInitialLanguage(),
  ns: ["preview"],
  resources: {
    en: {
      preview: {},
    },
    zh: {
      preview: ZH_TRANSLATIONS,
    },
  },
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

function LocalizedPreview({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation("preview")

  return <>{translateNode(children, t)}</>
}

function usePreviewI18n() {
  const { i18n: i18nInstance, t } = useTranslation("preview")
  const language = toPreviewLanguage(i18nInstance.resolvedLanguage)

  return {
    language,
    setLanguage: (nextLanguage: PreviewLanguage) => {
      void i18nInstance.changeLanguage(nextLanguage)
    },
    t: (message: string, defaultValue?: string) =>
      t(normalizeMessage(message), { defaultValue: defaultValue ?? message }),
  }
}

function PreviewLanguageSync() {
  const { i18n: i18nInstance } = useTranslation("preview")
  const language = toPreviewLanguage(i18nInstance.resolvedLanguage)

  React.useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en"
  }, [language])

  return null
}

function getInitialLanguage(): PreviewLanguage {
  if (typeof window === "undefined") {
    return "en"
  }

  return toPreviewLanguage(window.localStorage.getItem(STORAGE_KEY))
}

function translateNode(
  node: React.ReactNode,
  t: (message: string) => string,
): React.ReactNode {
  if (typeof node === "string") {
    return translateMessage(node, t)
  }

  if (!node || typeof node !== "object") {
    return node
  }

  if (Array.isArray(node)) {
    return React.Children.map(node, (child) => translateNode(child, t))
  }

  if (!React.isValidElement(node)) {
    return node
  }

  const props = node.props as Record<string, unknown>
  const nextProps: Record<string, unknown> = {}

  for (const [propName, propValue] of Object.entries(props)) {
    if (propName === "children") {
      nextProps.children = translateNode(propValue as React.ReactNode, t)
    } else if (TRANSLATABLE_PROP_NAMES.has(propName) || propName === "rules") {
      nextProps[propName] = translatePropValue(propValue, t)
    }
  }

  return React.cloneElement(node, nextProps)
}

function translatePropValue(
  value: unknown,
  t: (message: string) => string,
): unknown {
  if (typeof value === "string") {
    return translateMessage(value, t)
  }

  if (React.isValidElement(value)) {
    return translateNode(value, t)
  }

  if (Array.isArray(value)) {
    return value.map((item) => translatePropValue(item, t))
  }

  if (isPlainObject(value)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        key === "message" ? translatePropValue(nestedValue, t) : nestedValue,
      ]),
    )
  }

  return value
}

function translateMessage(message: string, t: (message: string) => string) {
  const normalizedMessage = normalizeMessage(message)

  return normalizedMessage ? t(normalizedMessage) : message
}

function toPreviewLanguage(
  language: null | string | undefined,
): PreviewLanguage {
  return language === "zh" ? "zh" : "en"
}

function normalizeMessage(message: string) {
  return message.replace(/\s+/g, " ").trim()
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && Object.getPrototypeOf(value) === Object.prototype
}

export {
  LocalizedPreview,
  PreviewI18nProvider,
  type PreviewLanguage,
  usePreviewI18n,
}
