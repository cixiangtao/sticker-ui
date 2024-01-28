import { useState } from "react"
import { Button, Form, Input, Tag } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF6DC]",
  description:
    "Form keeps an antd-like API while the field shell carries the sticker label, helper, and error states.",
  order: 10,
  title: "Basic Login",
})

function Demo() {
  const [submittedEmail, setSubmittedEmail] = useState("Not submitted yet")

  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_14rem]">
      <Form
        initialValues={{
          email: "hello@sticker.dev",
          password: "",
        }}
        onFinish={(values) => {
          setSubmittedEmail(String(values.email ?? ""))
        }}
      >
        <Form.Item
          extra="Use the same name and rules shape you would expect from Ant Design."
          label="Email"
          name="email"
          rules={[
            { message: "Email is required.", required: true, whitespace: true },
            { message: "Use a valid email address.", type: "email" },
          ]}
        >
          <Input placeholder="hello@sticker.dev" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { message: "Password is required.", required: true },
            { message: "Use at least 6 characters.", min: 6 },
          ]}
        >
          <Input placeholder="Enter password" type="password" />
        </Form.Item>
        <Button type="submit">Submit form</Button>
      </Form>
      <div className="grid content-start gap-3 rounded-sticker-2xl border-2 border-ink bg-surface p-4 shadow-sticker-md">
        <Tag color="success" dot>
          Latest submit
        </Tag>
        <p className="m-0 text-sm leading-6 font-bold">{submittedEmail}</p>
      </div>
    </div>
  )
}

export { Demo }
export default meta
