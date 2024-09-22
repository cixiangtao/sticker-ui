import { Button, Form, Input } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-info",
  order: 20,
  titleKey: "preview.components.validationRules",
  descriptionKey:
    "preview.components.rulesRunOnChangeByDefaultAndCanMixRequiredLengthPatternTypeAndCustomValidators",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <Form
      initialValues={{
        nickname: "Sticker captain",
        website: "https://sticker.dev",
      }}
      layout="horizontal"
      onFinish={() => undefined}
    >
      <Form.Item
        extra={tm("preview.components.between3And18Characters")}
        label={tm("preview.components.nickname")}
        name="nickname"
        rules={[
          {
            message: tm("preview.components.nicknameIsRequired"),
            required: true,
            whitespace: true,
          },
          { message: tm("preview.components.nicknameIsTooShort"), min: 3 },
          { message: tm("preview.components.nicknameIsTooLong"), max: 18 },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        extra={tm("preview.components.onlyHttpsUrlsAreAcceptedInThisExample")}
        label={tm("preview.components.website")}
        name="website"
        rules={[
          {
            message: tm("preview.components.websiteMustStartWithHttps"),
            pattern: /^https:\/\/.+/,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={tm("preview.components.inviteCode")}
        name="inviteCode"
        rules={[
          {
            message: tm("preview.components.inviteCodeMustBeSticker"),
            validator: (_rule, value) => {
              if (value && value !== "STICKER") {
                throw new Error("Invite code must be STICKER.")
              }
            },
          },
        ]}
      >
        <Input placeholder={tm("preview.components.sticker")} />
      </Form.Item>
      <div className="md:col-start-2">
        <Button type="submit">{tm("preview.components.checkRules")}</Button>
      </div>
    </Form>
  )
}

export { Demo, meta }
