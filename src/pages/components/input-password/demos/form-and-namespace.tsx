import { Form, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 20,
  titleKey: "preview.components.formNamespace",
  descriptionKey:
    "preview.components.theNamespacedInputPasswordEntryStaysAvailableFromThePackageRootWhilePreservingFormItemValueAndValidationWiring",
})

function Demo() {
  return (
    <Form
      initialValues={{
        password: "Sticker Secret",
      }}
      onFinish={() => undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra="Form item passes value onchange and ARIA invalid through to the inner password control."
          label="Account Password"
          name="password"
          rules={[
            {
              message: "Password Is Required",
              required: true,
            },
            { message: "Use at least 8 characters.", min: 8 },
          ]}
        >
          <Input.Password
            autoComplete="current-password"
            hideLabel="Hide"
            placeholder="Enter Password"
            showLabel="Show"
          />
        </Form.Item>
        <Form.Item
          extra="Disabled password inputs keep the frame and toggle in one locked state."
          label="Archived Secret"
        >
          <Input.Password
            defaultValue="Locked Sticker"
            disabled
            hideLabel="Hide"
            showLabel="Show"
            variant="filled"
          />
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
