import { PreviewI18nProvider } from "./i18n/preview"
import { PreviewLayout } from "./layouts/preview"

function App() {
  return (
    <PreviewI18nProvider>
      <PreviewLayout />
    </PreviewI18nProvider>
  )
}

export { App }
