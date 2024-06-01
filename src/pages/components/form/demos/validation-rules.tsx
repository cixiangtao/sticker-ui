import { Button, Form, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Rules run on change by default and can mix required, length, pattern, type, and custom validators.",
  order: 20,
  title: "Validation Rules",
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
            message: "Nickname is required.",
            required: true,
            whitespace: true,
          },
          { message: "Nickname is too short.", min: 3 },
          { message: "Nickname is too long.", max: 18 },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        extra="Only https URLs are accepted in this example."
        label="Website"
        name="website"
        rules={[
          {
            message: "Website must start with https://.",
            pattern: /^https:\/\/.+/,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Invite code"
        name="inviteCode"
        rules={[
          {
            message: "Invite code must be STICKER.",
            validator: (_rule, value) => {
              if (value && value !== "STICKER") {
                throw new Error("Invite code must be STICKER.")
              }
            },
          },
        ]}
      >
        <Input placeholder="STICKER" />
      </Form.Item>
      <div className="md:col-start-2">
        <Button type="submit">Check rules</Button>
      </div>
    </Form>
  )
}

export { Demo, meta }
