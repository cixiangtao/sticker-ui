import { Button, Form, Input, Switch } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "Form-level and item-level triggers can validate on blur, collect non-value props, and show manual status or help copy.",
  order: 40,
  title: "Triggers & Status",
})

function Demo() {
  return (
    <Form
      disabled={false}
      initialValues={{
        approval: true,
        slug: "sticker-page",
      }}
      layout="horizontal"
      onFinish={() => undefined}
      validateTrigger="onBlur"
    >
      <Form.Item
        extra="This field validates on blur because the form sets validateTrigger."
        label="Page slug"
        name="slug"
        required={true}
        rules={[
          {
            message: "Use lowercase letters and dashes.",
            pattern: /^[a-z-]+$/,
          },
        ]}
      >
        <Input placeholder="sticker-page" />
      </Form.Item>
      <Form.Item
        extra="Switch uses checked and onCheckedChange instead of value and onChange."
        label="Ready to publish"
        name="approval"
        trigger="onCheckedChange"
        validateStatus="success"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      <Form.Item
        help="Manual help overrides validation messages for display-only guidance."
        label="Review note"
        validateStatus="warning"
      >
        <Input placeholder="Add an optional note" />
      </Form.Item>
      <div className="md:col-start-2">
        <Button type="submit">Validate on blur</Button>
      </div>
    </Form>
  )
}

export { Demo, meta }
