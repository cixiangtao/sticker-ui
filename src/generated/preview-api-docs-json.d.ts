declare module "@/generated/preview-api-docs.json" {
  import type { PreviewApiDoc } from "@/layouts/preview"

  const apiDocs: Record<string, PreviewApiDoc>

  export default apiDocs
}
