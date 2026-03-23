import { Button, Checkbox, Form, Input, Select, Switch } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 50,
  titleKey: "preview.components.inlineLayout",
  descriptionKey:
    "preview.components.formInlineLayoutKeepsShortFiltersActionsAndToggleFieldsInOneResponsiveControlRow",
})

function Demo() {
  return (
    <Form
      initialValues={{
        archived: false,
        keyword: "dialog",
        section: "overlays",
        strict: true,
      }}
      layout="inline"
      onFinish={() => undefined}
    >
      <Form.Item label="Keyword" name="keyword">
        <Input placeholder="Search components" size="sm" />
      </Form.Item>
      <Form.Item label="Section" name="section">
        <Select size="sm">
          <Select.Trigger>
            <Select.Value placeholder="Section" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="forms">Forms</Select.Item>
            <Select.Item value="overlays">Overlays</Select.Item>
            <Select.Item value="data">Data</Select.Item>
          </Select.Content>
        </Select>
      </Form.Item>
      <Form.Item
        label="Strict"
        name="strict"
        trigger="onCheckedChange"
        valuePropName="checked"
      >
        <Switch size="sm" tone="success" />
      </Form.Item>
      <Form.Item
        label="Archived"
        name="archived"
        trigger="onCheckedChange"
        valuePropName="checked"
      >
        <Checkbox label="Include" size="sm" />
      </Form.Item>
      <Button size="sm" type="submit">
        Apply filters
      </Button>
    </Form>
  )
}

export { Demo, meta }
