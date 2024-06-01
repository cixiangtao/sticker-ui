import {
  Form,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  description:
    "Invalid, disabled, and quiet select states stay visible through Radix props and Form.Item validation.",
  order: 30,
  title: "States",
})

function Demo() {
  return (
    <Form
      initialValues={{
        destination: "",
        priority: "high",
      }}
      onFinish={() => undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra="The field shell passes aria-invalid to Select when validation fails."
          label="Destination"
          name="destination"
          rules={[{ message: "Destination is required.", required: true }]}
        >
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose a destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="docs">Docs page</SelectItem>
              <SelectItem value="registry">Registry card</SelectItem>
              <SelectItem value="preview">Preview shell</SelectItem>
            </SelectContent>
          </Select>
        </Form.Item>
        <Form.Item extra="Use disabled for archived settings." label="Archive">
          <Select defaultValue="locked" disabled>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="locked">Locked after review</SelectItem>
              <SelectItem value="editable">Editable draft</SelectItem>
            </SelectContent>
          </Select>
        </Form.Item>
        <Form.Item
          extra="Tone can reinforce selection status."
          label="Priority"
          name="priority"
        >
          <Select tone="success" variant="filled">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">Normal pass</SelectItem>
              <SelectItem value="high">High focus</SelectItem>
            </SelectContent>
          </Select>
        </Form.Item>
        <Form.Item extra="Quiet selects sit inside dense cards." label="View">
          <Select defaultValue="compact" tone="secondary" variant="quiet">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="compact">Compact cards</SelectItem>
              <SelectItem value="roomy">Roomy panels</SelectItem>
            </SelectContent>
          </Select>
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
