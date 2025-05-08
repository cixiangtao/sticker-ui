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
  className: "bg-su-fill-danger",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndQuietSelectStatesStayVisibleThroughRadixPropsAndFormItemValidation",
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
          extra="The field shell passes ARIA invalid to select when validation fails."
          label="Destination"
          name="destination"
          rules={[
            {
              message: "Destination Is Required",
              required: true,
            },
          ]}
        >
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose A Destination" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="docs">Docs Page</SelectItem>
              <SelectItem value="registry">Registry Card</SelectItem>
              <SelectItem value="preview">Preview Shell</SelectItem>
            </SelectContent>
          </Select>
        </Form.Item>
        <Form.Item extra="Use disabled for archived settings." label="Archive">
          <Select defaultValue="locked" disabled>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="locked">Locked After Review</SelectItem>
              <SelectItem value="editable">Editable Draft</SelectItem>
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
              <SelectItem value="normal">Normal Pass</SelectItem>
              <SelectItem value="high">High Focus</SelectItem>
            </SelectContent>
          </Select>
        </Form.Item>
        <Form.Item extra="Quiet selects sit inside dense cards." label="View">
          <Select defaultValue="compact" tone="secondary" variant="quiet">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="compact">Compact Cards</SelectItem>
              <SelectItem value="roomy">Roomy Panels</SelectItem>
            </SelectContent>
          </Select>
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
