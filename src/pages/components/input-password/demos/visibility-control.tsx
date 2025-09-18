import * as React from "react"
import { Button, Field, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
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
      <Field label="Default Visible">
        <Input.Password
          defaultValue="Sticker Secret"
          defaultVisible={true}
          onVisibleChange={(nextVisible) => {
            setLastState(nextVisible ? "Shown" : "Hidden")
          }}
        />
      </Field>
      <Field label="Controlled Visible">
        <Input.Password
          onVisibleChange={setVisible}
          placeholder="Controlled Visibility"
          visible={visible}
        />
      </Field>
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
        <Field.Description>
          Last visibility event: {lastState}
        </Field.Description>
      </div>
    </div>
  )
}

export { Demo, meta }
