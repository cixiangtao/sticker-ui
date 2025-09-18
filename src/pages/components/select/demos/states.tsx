import { Form, Select } from "sticker-ui"

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
            <Select.Trigger>
              <Select.Value placeholder="Choose A Destination" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="docs">Docs Page</Select.Item>
              <Select.Item value="registry">Registry Card</Select.Item>
              <Select.Item value="preview">Preview Shell</Select.Item>
            </Select.Content>
          </Select>
        </Form.Item>
        <Form.Item extra="Use disabled for archived settings." label="Archive">
          <Select defaultValue="locked" disabled>
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="locked">Locked After Review</Select.Item>
              <Select.Item value="editable">Editable Draft</Select.Item>
            </Select.Content>
          </Select>
        </Form.Item>
        <Form.Item
          extra="Tone can reinforce selection status."
          label="Priority"
          name="priority"
        >
          <Select tone="success" variant="filled">
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="normal">Normal Pass</Select.Item>
              <Select.Item value="high">High Focus</Select.Item>
            </Select.Content>
          </Select>
        </Form.Item>
        <Form.Item extra="Quiet selects sit inside dense cards." label="View">
          <Select defaultValue="compact" tone="secondary" variant="quiet">
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="compact">Compact Cards</Select.Item>
              <Select.Item value="roomy">Roomy Panels</Select.Item>
            </Select.Content>
          </Select>
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
