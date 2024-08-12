import { Form, Textarea } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndSemanticToneStatesStayVisibleOnMultilineFieldsThroughNativeAttributesAndFormItemValidation",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <Form onFinish={() => undefined}>
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra={tm(
            "preview.components.theFieldShellPassesAriaInvalidToTextareaWhenValidationFails",
          )}
          label={tm("preview.components.summary")}
          name="summary"
          rules={[
            {
              message: tm("preview.components.summaryIsRequired"),
              required: true,
              whitespace: true,
            },
            {
              message: tm("preview.components.useAtLeast12Characters"),
              min: 12,
            },
          ]}
        >
          <Textarea
            placeholder={tm("preview.components.writeAUsefulSummary")}
          />
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.useDisabledForArchivedNotes")}
          label={tm("preview.components.archiveNote")}
        >
          <Textarea defaultValue="Locked after review." disabled />
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.toneCanReinforceSuccessCopy")}
          label={tm("preview.components.readyNote")}
        >
          <Textarea
            defaultValue="This copy is approved and ready to ship."
            tone="success"
            variant="filled"
          />
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.quietTextareasSitInsideDenseCards")}
          label={tm("preview.components.draft")}
        >
          <Textarea
            placeholder={tm("preview.components.captureARoughDraft")}
            tone="secondary"
            variant="quiet"
          />
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
