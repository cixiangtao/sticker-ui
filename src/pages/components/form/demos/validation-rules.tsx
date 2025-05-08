import { Button, Form, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 20,
  titleKey: "preview.components.validationRules",
  descriptionKey:
    "preview.components.rulesRunOnChangeByDefaultAndCanMixRequiredLengthPatternTypeAndCustomValidators",
})

function Demo() {
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
        extra="Between 3 and 18 characters."
        label="Nickname"
        name="nickname"
        rules={[
          {
            message: "Nickname Is Required",
            required: true,
            whitespace: true,
          },
          { message: "Nickname Is Too Short", min: 3 },
          { message: "Nickname Is Too Long", max: 18 },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        extra="Only https urls are accepted in this example."
        label="Website"
        name="website"
        rules={[
          {
            message: "Website must start with https.",
            pattern: /^https:\/\/.+/,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Invite Code"
        name="inviteCode"
        rules={[
          {
            message: "Invite code must be sticker.",
            validator: (_rule, value) => {
              if (value && value !== "STICKER") {
                throw new Error("Invite code must be STICKER.")
              }
            },
          },
        ]}
      >
        <Input placeholder="Sticker" />
      </Form.Item>
      <div className="md:col-start-2">
        <Button type="submit">Check Rules</Button>
      </div>
    </Form>
  )
}

export { Demo, meta }
