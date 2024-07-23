import { useState } from "react"
import { Button, Form, Input, Tag } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "The form instance exposes submit, resetFields, validateFields, and value setters for controlled workflows.",
  order: 30,
  title: "Form Instance",
  titleKey: "preview.components.formInstance",
  descriptionKey:
    "preview.components.theFormInstanceExposesSubmitResetfieldsValidatefieldsAndValueSettersForControlledWorkflows",
})

function Demo() {
  const { tm } = usePreviewI18n()
  const [form] = Form.useForm()
  const [status, setStatus] = useState("Ready to validate")

  return (
    <div className="grid gap-4">
      <Form
        form={form}
        initialValues={{
          project: "Sticker UI",
          slug: "sticker-ui",
        }}
        onFinish={(values) => {
          setStatus(`Saved ${String(values.project ?? "")}`)
        }}
        onFinishFailed={({ errorFields }) => {
          setStatus(`${errorFields.length} field needs attention`)
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Form.Item
            label={tm("preview.components.project")}
            name="project"
            rules={[
              {
                message: tm("preview.components.projectNameIsRequired"),
                required: true,
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            extra={tm("preview.components.lowercaseLettersAndHyphensOnly")}
            label={tm("preview.components.slug")}
            name="slug"
            rules={[
              {
                message: tm("preview.components.slugIsRequired"),
                required: true,
              },
              {
                message: tm(
                  "preview.components.useLowercaseLettersAndHyphensOnly",
                ),
                pattern: /^[a-z-]+$/,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="submit">{tm("preview.components.submit")}</Button>
          <Button
            onClick={() => {
              form.setFieldsValue({
                project: "Handbook Kit",
                slug: "handbook-kit",
              })
              setStatus("Preset values applied")
            }}
            type="button"
            variant="outlined"
          >
            {tm("preview.components.fillPreset")}
          </Button>
          <Button
            onClick={() => {
              void form
                .validateFields()
                .then(() => {
                  setStatus("All fields passed")
                })
                .catch(() => {
                  setStatus("Validation found issues")
                })
            }}
            type="button"
            variant="dashed"
          >
            {tm("preview.components.validateNow")}
          </Button>
          <Button
            onClick={() => {
              form.resetFields()
              setStatus("Fields reset")
            }}
            type="button"
            variant="text"
          >
            {tm("preview.components.reset")}
          </Button>
        </div>
      </Form>
      <div className="flex items-center gap-3">
        <Tag color="secondary" dot>
          {tm("preview.components.instanceStatus")}
        </Tag>
        <span className="text-sm font-bold">{status}</span>
      </div>
    </div>
  )
}

export { Demo, meta }
