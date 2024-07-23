import { Form, Input } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "The namespaced Input.Password entry stays available from the package root while preserving Form.Item value and validation wiring.",
  order: 20,
  title: "Form Namespace",
  titleKey: "preview.components.formNamespace",
  descriptionKey:
    "preview.components.theNamespacedInputPasswordEntryStaysAvailableFromThePackageRootWhilePreservingFormItemValueAndValidationWiring",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <Form
      initialValues={{
        password: "sticker-secret",
      }}
      onFinish={() => undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra={tm(
            "preview.components.formItemPassesValueOnchangeAndAriaInvalidThroughToTheInnerPasswordControl",
          )}
          label={tm("preview.components.accountPassword")}
          name="password"
          rules={[
            {
              message: tm("preview.components.passwordIsRequired"),
              required: true,
            },
            { message: tm("preview.components.useAtLeast8Characters"), min: 8 },
          ]}
        >
          <Input.Password
            autoComplete="current-password"
            hideLabel={tm("preview.components.hide")}
            placeholder={tm("preview.components.enterPassword")}
            showLabel={tm("preview.components.show")}
          />
        </Form.Item>
        <Form.Item
          extra={tm(
            "preview.components.disabledPasswordInputsKeepTheFrameAndToggleInOneLockedState",
          )}
          label={tm("preview.components.archivedSecret")}
        >
          <Input.Password
            defaultValue="locked-sticker"
            disabled
            hideLabel={tm("preview.components.hide")}
            showLabel={tm("preview.components.show")}
            variant="filled"
          />
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
