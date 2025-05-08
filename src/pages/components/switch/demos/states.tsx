import { Button, Form, Switch } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-danger",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndSemanticSwitchStatesStayVisibleThroughRadixPropsAndFormItemValidation",
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
          extra="Use valuePropName and onCheckedChange when switch is controlled by form item."
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
        Save Settings
      </Button>
    </Form>
  )
}

export { Demo, meta }
