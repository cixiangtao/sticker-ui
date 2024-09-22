import { useState } from "react"
import { Button, Form, Input, Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 10,
  titleKey: "preview.components.basicLogin",
  descriptionKey:
    "preview.components.formKeepsAnAntdLikeApiWhileTheFieldShellCarriesTheStickerLabelHelperAndErrorStates",
})

function Demo() {
  const { tm } = usePreviewI18n()
  const [submittedEmail, setSubmittedEmail] = useState("Not submitted yet")

  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_14rem]">
      <Form
        initialValues={{
          email: "hello@sticker.dev",
          password: "",
        }}
        onFinish={(values) => {
          setSubmittedEmail(String(values.email ?? ""))
        }}
      >
        <Form.Item
          extra={tm(
            "preview.components.useTheSameNameAndRulesShapeYouWouldExpectFromAntDesign",
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
          <Input placeholder={tm("preview.components.helloStickerDev")} />
        </Form.Item>
        <Form.Item
          label={tm("preview.components.password")}
          name="password"
          rules={[
            {
              message: tm("preview.components.passwordIsRequired"),
              required: true,
            },
            { message: tm("preview.components.useAtLeast6Characters"), min: 6 },
          ]}
        >
          <Input.Password
            hideLabel={tm("preview.components.hide")}
            placeholder={tm("preview.components.enterPassword")}
            showLabel={tm("preview.components.show")}
          />
        </Form.Item>
        <Button type="submit">{tm("preview.components.submitForm")}</Button>
      </Form>
      <div className="grid content-start gap-3 rounded-sticker-2xl border-2 border-ink bg-surface p-4 shadow-sticker-md">
        <Tag color="success" dot>
          {tm("preview.components.latestSubmit")}
        </Tag>
        <p className="m-0 text-sm leading-6 font-bold">{submittedEmail}</p>
      </div>
    </div>
  )
}

export { Demo, meta }
