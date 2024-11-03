import * as React from "react"
import { Button, InputPassword, Label, LabelDescription } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-warning",
  order: 40,
  titleKey: "preview.components.visibilityControl",
  descriptionKey:
    "preview.components.visibilityCanStartOpenMoveIntoControlledModeAndReportEveryToggleThroughOnvisiblechange",
})

function Demo() {
  const [visible, setVisible] = React.useState(false)
  const [lastState, setLastState] = React.useState(() => "Hidden")

  return (
    <div className="grid max-w-xl gap-4">
      <div className="grid gap-3">
        <Label htmlFor="input-password-default-visible">Default Visible</Label>
        <InputPassword
          defaultValue="Sticker Secret"
          defaultVisible={true}
          id="input-password-default-visible"
          onVisibleChange={(nextVisible) => {
            setLastState(nextVisible ? "Shown" : "Hidden")
          }}
        />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="input-password-controlled-visible">
          Controlled Visible
        </Label>
        <InputPassword
          id="input-password-controlled-visible"
          onVisibleChange={setVisible}
          placeholder="Controlled Visibility"
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
          Toggle Controlled Field
        </Button>
        <LabelDescription>Last visibility event: {lastState}</LabelDescription>
      </div>
    </div>
  )
}

export { Demo, meta }
