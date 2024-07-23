import { Button, Form, Switch } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  description:
    "Invalid, disabled, and semantic switch states stay visible through Radix props and Form.Item validation.",
  order: 30,
  title: "States",
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndSemanticSwitchStatesStayVisibleThroughRadixPropsAndFormItemValidation",
})

function Demo() {
  const { tm } = usePreviewI18n()
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
          extra={tm(
            "preview.components.useValuepropnameAndOncheckedchangeWhenSwitchIsControlledByFormItem",
          )}
          label={tm("preview.components.reminders")}
          name="reminders"
          rules={[
            {
              message: tm("preview.components.turnOnRemindersBeforePublishing"),
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
        <Form.Item
          extra={tm("preview.components.useDisabledForManagedSettings")}
          label={tm("preview.components.managed")}
        >
          <Switch checked disabled />
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.toneCanReinforceAHealthySyncSetting")}
          label={tm("preview.components.sync")}
          name="sync"
          trigger="onCheckedChange"
          valuePropName="checked"
        >
          <Switch tone="success" variant="filled" />
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.quietSwitchesSitInsideDenseCards")}
          label={tm("preview.components.beta")}
        >
          <Switch defaultChecked tone="secondary" variant="quiet" />
        </Form.Item>
      </div>
      <Button className="w-fit" type="submit">
        {tm("preview.components.saveSettings")}
      </Button>
    </Form>
  )
}

export { Demo, meta }
