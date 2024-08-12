import { Form, Input } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndSemanticToneStatesStayVisibleThroughNativeAttributesSuchAsAriaInvalidAndDisabled",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <Form
      initialValues={{
        email: "hello@sticker.dev",
        handle: "sticker-captain",
      }}
      onFinish={() => undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra={tm(
            "preview.components.theFieldShellPassesAriaInvalidToInputWhenValidationFails",
          )}
          label={tm("preview.components.email")}
          name="email"
          rules={[
            {
              message: tm("preview.components.emailIsRequired"),
              required: true,
              whitespace: true,
            },
            {
              message: tm("preview.components.useAValidEmailAddress"),
              type: "email",
            },
          ]}
        >
          <Input
            placeholder={tm("preview.components.helloStickerDev")}
            type="email"
          />
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.useDisabledForLockedSettings")}
          label={tm("preview.components.handle")}
        >
          <Input defaultValue="@sticker" disabled />
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.toneCanReinforceSuccessCopy")}
          label={tm("preview.components.readyState")}
        >
          <Input defaultValue="ready-to-ship" tone="success" variant="filled" />
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.quietInputsSitInsideDenseCards")}
          label={tm("preview.components.invite")}
        >
          <Input
            placeholder={tm("preview.components.sticker")}
            tone="secondary"
            variant="quiet"
          />
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
