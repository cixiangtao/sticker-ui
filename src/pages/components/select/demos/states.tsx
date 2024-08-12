import {
  Form,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  order: 30,
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndQuietSelectStatesStayVisibleThroughRadixPropsAndFormItemValidation",
})

function Demo() {
  const { tm } = usePreviewI18n()
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
          extra={tm(
            "preview.components.theFieldShellPassesAriaInvalidToSelectWhenValidationFails",
          )}
          label={tm("preview.components.destination")}
          name="destination"
          rules={[
            {
              message: tm("preview.components.destinationIsRequired"),
              required: true,
            },
          ]}
        >
          <Select>
            <SelectTrigger>
              <SelectValue
                placeholder={tm("preview.components.chooseADestination")}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="docs">
                {tm("preview.components.docsPage")}
              </SelectItem>
              <SelectItem value="registry">
                {tm("preview.components.registryCard")}
              </SelectItem>
              <SelectItem value="preview">
                {tm("preview.components.previewShell")}
              </SelectItem>
            </SelectContent>
          </Select>
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.useDisabledForArchivedSettings")}
          label={tm("preview.components.archive")}
        >
          <Select defaultValue="locked" disabled>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="locked">
                {tm("preview.components.lockedAfterReview")}
              </SelectItem>
              <SelectItem value="editable">
                {tm("preview.components.editableDraft")}
              </SelectItem>
            </SelectContent>
          </Select>
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.toneCanReinforceSelectionStatus")}
          label={tm("preview.components.priority")}
          name="priority"
        >
          <Select tone="success" variant="filled">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">
                {tm("preview.components.normalPass")}
              </SelectItem>
              <SelectItem value="high">
                {tm("preview.components.highFocus")}
              </SelectItem>
            </SelectContent>
          </Select>
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.quietSelectsSitInsideDenseCards")}
          label={tm("preview.components.view")}
        >
          <Select defaultValue="compact" tone="secondary" variant="quiet">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="compact">
                {tm("preview.components.compactCards")}
              </SelectItem>
              <SelectItem value="roomy">
                {tm("preview.components.roomyPanels")}
              </SelectItem>
            </SelectContent>
          </Select>
        </Form.Item>
      </div>
    </Form>
  )
}

export { Demo, meta }
