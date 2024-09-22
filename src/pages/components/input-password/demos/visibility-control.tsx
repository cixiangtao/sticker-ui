import * as React from "react"
import { Button, InputPassword, Label, LabelDescription } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 40,
  titleKey: "preview.components.visibilityControl",
  descriptionKey:
    "preview.components.visibilityCanStartOpenMoveIntoControlledModeAndReportEveryToggleThroughOnvisiblechange",
})

function Demo() {
  const { tm } = usePreviewI18n()
  const [visible, setVisible] = React.useState(false)
  const [lastState, setLastState] = React.useState(() =>
    tm("preview.components.hidden"),
  )

  return (
    <div className="grid max-w-xl gap-4">
      <div className="grid gap-3">
        <Label htmlFor="input-password-default-visible">
          {tm("preview.components.defaultVisible")}
        </Label>
        <InputPassword
          defaultValue={tm("preview.components.stickerSecret")}
          defaultVisible={true}
          id="input-password-default-visible"
          onVisibleChange={(nextVisible) => {
            setLastState(
              nextVisible
                ? tm("preview.components.shown")
                : tm("preview.components.hidden"),
            )
          }}
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="input-password-controlled-visible">
          {tm("preview.components.controlledVisible")}
        </Label>
        <InputPassword
          id="input-password-controlled-visible"
          onVisibleChange={setVisible}
          placeholder={tm("preview.components.controlledVisibility")}
          visible={visible}
        />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button
          onClick={() => {
            setVisible((value) => !value)
          }}
          size="sm"
          variant="outlined"
        >
          {tm("preview.components.toggleControlledField")}
        </Button>
        <LabelDescription>
          {tm("preview.components.lastVisibilityEvent")}
          {lastState}
        </LabelDescription>
      </div>
    </div>
  )
}

export { Demo, meta }
