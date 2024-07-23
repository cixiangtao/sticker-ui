import { Button, Form, Input, Switch } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "Form-level and item-level triggers can validate on blur, collect non-value props, and show manual status or help copy.",
  order: 40,
  title: "Triggers & Status",
  descriptionKey:
    "preview.components.formLevelAndItemLevelTriggersCanValidateOnBlurCollectNonValuePropsAndShowManualStatusOrHelpCopy",
  titleKey: "preview.components.triggersAndStatus",
})

function Demo() {
  const { tm } = usePreviewI18n()
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
        extra={tm(
          "preview.components.thisFieldValidatesOnBlurBecauseTheFormSetsValidatetrigger",
        )}
        label={tm("preview.components.pageSlug")}
        name="slug"
        required={true}
        rules={[
          {
            message: tm("preview.components.useLowercaseLettersAndDashes"),
            pattern: /^[a-z-]+$/,
          },
        ]}
      >
        <Input placeholder={tm("preview.components.stickerPage")} />
      </Form.Item>
      <Form.Item
        extra={tm(
          "preview.components.switchUsesCheckedAndOncheckedchangeInsteadOfValueAndOnchange",
        )}
        label={tm("preview.components.readyToPublish")}
        name="approval"
        trigger="onCheckedChange"
        validateStatus="success"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
      <Form.Item
        help="Manual help overrides validation messages for display-only guidance."
        label={tm("preview.components.reviewNote")}
        validateStatus="warning"
      >
        <Input placeholder={tm("preview.components.addAnOptionalNote")} />
      </Form.Item>
      <div className="md:col-start-2">
        <Button type="submit">{tm("preview.components.validateOnBlur")}</Button>
      </div>
    </Form>
  )
}

export { Demo, meta }
