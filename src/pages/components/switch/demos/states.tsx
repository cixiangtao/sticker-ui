import { Button, Form, Switch } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  description:
    "Invalid, disabled, and semantic switch states stay visible through Radix props and Form.Item validation.",
  order: 30,
  title: "States",
})

function Demo() {
  return (
    <Form
      initialValues={{
        reminders: false,
        sync: true,
      }}
      onFinish={() => undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra="Use valuePropName and onCheckedChange when Switch is controlled by Form.Item."
          label="Reminders"
          name="reminders"
          rules={[
            {
              message: "Turn on reminders before publishing.",
              validator: (_rule, value) => {
                if (value !== true) {
                  throw new Error("Turn on reminders before publishing.")
                }
              },
            },
          ]}
          trigger="onCheckedChange"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>
        <Form.Item extra="Use disabled for managed settings." label="Managed">
          <Switch checked disabled />
        </Form.Item>
        <Form.Item
          extra="Tone can reinforce a healthy sync setting."
          label="Sync"
          name="sync"
          trigger="onCheckedChange"
          valuePropName="checked"
        >
          <Switch tone="success" variant="filled" />
        </Form.Item>
        <Form.Item extra="Quiet switches sit inside dense cards." label="Beta">
          <Switch defaultChecked tone="secondary" variant="quiet" />
        </Form.Item>
      </div>
      <Button className="w-fit" type="submit">
        Save settings
      </Button>
    </Form>
  )
}

export { Demo }
export default meta
