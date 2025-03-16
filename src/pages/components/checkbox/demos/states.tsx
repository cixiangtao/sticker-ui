import { Button, Checkbox, Form } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-danger-soft",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndSemanticCheckboxStatesStayVisibleThroughRadixPropsAndFormItemValidation",
})

function Demo() {
  return (
    <Form
      initialValues={{
        accepted: false,
        digest: true,
      }}
      onFinish={() => undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra="Use valuePropName and onCheckedChange when checkbox is controlled by form item."
          label="Terms"
          name="accepted"
          rules={[
            {
              message: "Please accept the sticker terms.",
              required: true,
              type: "boolean",
              validator: (_rule, value) => {
                if (value !== true) {
                  throw new Error("Please accept the sticker terms.")
                }
              },
            },
          ]}
          trigger="onCheckedChange"
          valuePropName="checked"
        >
          <Checkbox label="Accept Terms" />
        </Form.Item>
        <Form.Item
          extra="Use disabled for locked checklist items."
          label="Archive"
        >
          <Checkbox checked disabled label="Locked Archive" />
        </Form.Item>
        <Form.Item
          extra="Tone can reinforce successful subscription choices."
          label="Digest"
          name="digest"
          trigger="onCheckedChange"
          valuePropName="checked"
        >
          <Checkbox label="Weekly Digest" tone="success" variant="filled" />
        </Form.Item>
        <Form.Item
          extra="Quiet checkboxes sit inside dense cards."
          label="Flag"
        >
          <Checkbox
            defaultChecked
            label="Compact Flag"
            tone="secondary"
            variant="quiet"
          />
        </Form.Item>
      </div>
      <Button className="w-fit" type="submit">
        Save Choices
      </Button>
    </Form>
  )
}

export { Demo, meta }
