import { useState } from "react"
import { Button, Form, Input, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#F6EFFF]",
  description:
    "The form instance exposes submit, resetFields, validateFields, and value setters for controlled workflows.",
  order: 30,
  title: "Form Instance",
})

function Demo() {
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
            label="Project"
            name="project"
            rules={[
              {
                message: "Project name is required.",
                required: true,
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            extra="Lowercase letters and hyphens only."
            label="Slug"
            name="slug"
            rules={[
              { message: "Slug is required.", required: true },
              {
                message: "Use lowercase letters and hyphens only.",
                pattern: /^[a-z-]+$/,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="submit">Submit</Button>
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
            Fill preset
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
            Validate now
          </Button>
          <Button
            onClick={() => {
              form.resetFields()
              setStatus("Fields reset")
            }}
            type="button"
            variant="text"
          >
            Reset
          </Button>
        </div>
      </Form>
      <div className="flex items-center gap-3">
        <Tag color="secondary" dot>
          Instance status
        </Tag>
        <span className="text-sm font-bold">{status}</span>
      </div>
    </div>
  )
}

export { Demo, meta }
