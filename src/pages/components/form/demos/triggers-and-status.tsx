import { Button, Form, Input, Switch } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 40,
  descriptionKey:
    "preview.components.formLevelAndItemLevelTriggersCanValidateOnBlurCollectNonValuePropsAndShowManualStatusOrHelpCopy",
  titleKey: "preview.components.triggersAndStatus",
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
        extra="This field validates on blur because the form sets validatetrigger."
        label="Page Slug"
        name="slug"
        required={true}
        rules={[
          {
            message: "Use lowercase letters and dashes.",
            pattern: /^[a-z-]+$/,
          },
        ]}
      >
        <Input placeholder="Sticker Page" />
      </Form.Item>
      <Form.Item
        extra="Switch uses checked and onCheckedChange instead of value and onchange."
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
        label="Review Note"
        validateStatus="warning"
      >
        <Input placeholder="Add An Optional Note" />
      </Form.Item>
      <div className="md:col-start-2">
        <Button type="submit">Validate On Blur</Button>
      </div>
    </Form>
  )
}

export { Demo, meta }
