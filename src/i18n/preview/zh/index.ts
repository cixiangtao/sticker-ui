import { defineMessages } from "../messages"
import { ZH_PREVIEW_API_DOC_MESSAGES } from "./api-docs"
import { ZH_PREVIEW_COMMON_MESSAGES } from "./common"
import { ZH_PREVIEW_COMPONENT_MESSAGES } from "./components"
import { ZH_PREVIEW_LAYOUT_MESSAGES } from "./messages"

const PREVIEW_MESSAGES = defineMessages({
  ...ZH_PREVIEW_COMMON_MESSAGES,
  ...ZH_PREVIEW_API_DOC_MESSAGES,
  ...ZH_PREVIEW_COMPONENT_MESSAGES,
  ...ZH_PREVIEW_LAYOUT_MESSAGES,
})

export { PREVIEW_MESSAGES }
