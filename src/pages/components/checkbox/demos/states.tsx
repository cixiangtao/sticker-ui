import { Button, Checkbox, Form } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-danger-soft",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndSemanticCheckboxStatesStayVisibleThroughRadixPropsAndFormItemValidation",
})

function Demo() {
  const { tm } = usePreviewI18n()
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
          extra={tm(
            "preview.components.useValuepropnameAndOncheckedchangeWhenCheckboxIsControlledByFormItem",
          )}
          label={tm("preview.components.terms")}
          name="accepted"
          rules={[
            {
              message: tm("preview.components.pleaseAcceptTheStickerTerms"),
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
          extra={tm("preview.components.useDisabledForLockedChecklistItems")}
          label={tm("preview.components.archive")}
        >
          <Checkbox checked disabled />
        </Form.Item>
        <Form.Item
          extra={tm(
            "preview.components.toneCanReinforceSuccessfulSubscriptionChoices",
          )}
          label={tm("preview.components.digest")}
          name="digest"
          trigger="onCheckedChange"
          valuePropName="checked"
        >
          <Checkbox tone="success" variant="filled" />
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.quietCheckboxesSitInsideDenseCards")}
          label={tm("preview.components.flag")}
        >
          <Checkbox defaultChecked tone="secondary" variant="quiet" />
        </Form.Item>
      </div>
      <Button className="w-fit" type="submit">
        {tm("preview.components.saveChoices")}
      </Button>
    </Form>
  )
}

export { Demo, meta }
