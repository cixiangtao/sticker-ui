import { Button, Checkbox, Form } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  description:
    "Invalid, disabled, and semantic checkbox states stay visible through Radix props and Form.Item validation.",
  order: 30,
  title: "States",
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
          extra="Use valuePropName and onCheckedChange when Checkbox is controlled by Form.Item."
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
          <Checkbox />
        </Form.Item>
        <Form.Item
          extra="Use disabled for locked checklist items."
          label="Archive"
        >
          <Checkbox checked disabled />
        </Form.Item>
        <Form.Item
          extra="Tone can reinforce successful subscription choices."
          label="Digest"
          name="digest"
          trigger="onCheckedChange"
          valuePropName="checked"
        >
          <Checkbox tone="success" variant="filled" />
        </Form.Item>
        <Form.Item
          extra="Quiet checkboxes sit inside dense cards."
          label="Flag"
        >
          <Checkbox defaultChecked tone="secondary" variant="quiet" />
        </Form.Item>
      </div>
      <Button className="w-fit" type="submit">
        Save choices
      </Button>
    </Form>
  )
}

export { Demo, meta }
