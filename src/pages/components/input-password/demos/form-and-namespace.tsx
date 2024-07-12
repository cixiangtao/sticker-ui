import { Form, Input } from "sticker-ui"

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
  return (
    <Form
      initialValues={{
        password: "sticker-secret",
      }}
      onFinish={() => undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra="Form.Item passes value, onChange, and aria-invalid through to the inner password control."
          label="Account password"
          name="password"
          rules={[
            { message: "Password is required.", required: true },
            { message: "Use at least 8 characters.", min: 8 },
          ]}
        >
          <Input.Password
            autoComplete="current-password"
            hideLabel="Hide"
            placeholder="Enter password"
            showLabel="Show"
          />
        </Form.Item>
        <Form.Item
          extra="Disabled password inputs keep the frame and toggle in one locked state."
          label="Archived secret"
        >
          <Input.Password
            defaultValue="locked-sticker"
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
