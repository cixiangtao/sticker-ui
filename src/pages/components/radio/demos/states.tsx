import { Button, Form, Label, RadioGroup, RadioGroupItem } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#FFF0F4]",
  description:
    "Invalid, disabled, and semantic radio states stay visible through Radix props and Form.Item validation.",
  order: 30,
  title: "States",
  titleKey: "preview.components.states",
  descriptionKey:
    "preview.components.invalidDisabledAndSemanticRadioStatesStayVisibleThroughRadixPropsAndFormItemValidation",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <Form
      initialValues={{
        channel: "",
        confidence: "ready",
      }}
      onFinish={() => undefined}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Form.Item
          extra={tm(
            "preview.components.radiogroupExposesOnchangeValueSoFormItemCanCollectTheSelectedStringValue",
          )}
          label={tm("preview.components.channel")}
          name="channel"
          rules={[
            {
              message: tm("preview.components.chooseOneLaunchChannel"),
              required: true,
            },
          ]}
        >
          <RadioGroup>
            <RadioOption
              id="radio-state-docs"
              label={tm("preview.components.docsPage")}
              value="docs"
            />
            <RadioOption
              id="radio-state-registry"
              label={tm("preview.components.registryCard")}
              value="registry"
            />
          </RadioGroup>
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.useDisabledForLockedChoiceGroups")}
          label={tm("preview.components.locked")}
        >
          <RadioGroup defaultValue="managed" disabled>
            <RadioOption
              id="radio-state-managed"
              label={tm("preview.components.managed")}
              value="managed"
            />
            <RadioOption
              id="radio-state-open"
              label={tm("preview.components.open")}
              value="open"
            />
          </RadioGroup>
        </Form.Item>
        <Form.Item
          extra={tm(
            "preview.components.toneCanReinforceConfidentRoutingChoices",
          )}
          label={tm("preview.components.confidence")}
          name="confidence"
        >
          <RadioGroup tone="success" variant="filled">
            <RadioOption
              id="radio-state-ready"
              label={tm("preview.components.ready")}
              value="ready"
            />
            <RadioOption
              id="radio-state-review"
              label={tm("preview.components.review")}
              value="review"
            />
          </RadioGroup>
        </Form.Item>
        <Form.Item
          extra={tm("preview.components.quietRadioItemsSitInsideDenseCards")}
          label={tm("preview.components.view")}
        >
          <RadioGroup defaultValue="compact" tone="secondary" variant="quiet">
            <RadioOption
              id="radio-state-compact"
              label={tm("preview.components.compactCards")}
              value="compact"
            />
            <RadioOption
              id="radio-state-roomy"
              label={tm("preview.components.roomyPanels")}
              value="roomy"
            />
          </RadioGroup>
        </Form.Item>
      </div>
      <Button className="w-fit" type="submit">
        {tm("preview.components.saveRoute")}
      </Button>
    </Form>
  )
}

function RadioOption({
  id,
  label,
  value,
}: {
  id: string
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-sticker-lg border border-ink bg-white/80 px-3 py-2">
      <RadioGroupItem id={id} value={value} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
}

export { Demo, meta }
