import * as React from "react"
import { Button, InputPassword, Label, LabelDescription } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const MAX_PASSWORD_LENGTH = 8

const meta = defineMeta({
  className: "bg-[#EAFBF5]",
  order: 30,
  titleKey: "preview.components.controlledMaxLength",
  descriptionKey:
    "preview.components.keepsAControlledPasswordValueCappedWhileStillUsingTheNativeMaxlengthInputConstraint",
})

function clampPassword(value: string) {
  return value.slice(0, MAX_PASSWORD_LENGTH)
}

function Demo() {
  const { tm } = usePreviewI18n()
  const [value, setValue] = React.useState("sticker")
  const remaining = MAX_PASSWORD_LENGTH - value.length

  return (
    <div className="grid max-w-xl gap-4">
      <div className="grid gap-3">
        <div className="flex items-end justify-between gap-3">
          <Label htmlFor="input-password-controlled-max-length">
            {tm("preview.components.inviteSecret")}
          </Label>
          <span className="rounded-sticker-sm border border-ink bg-surface px-2 py-1 text-xs font-extrabold text-text-muted">
            {value.length}/{MAX_PASSWORD_LENGTH}
          </span>
        </div>
        <InputPassword
          autoComplete="new-password"
          hideLabel={tm("preview.components.hide")}
          id="input-password-controlled-max-length"
          maxLength={MAX_PASSWORD_LENGTH}
          onChange={(nextValue) => {
            setValue(clampPassword(nextValue))
          }}
          placeholder={tm("preview.components.tryTypingOrPastingALongPassword")}
          showLabel={tm("preview.components.show")}
          value={value}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => {
            setValue(clampPassword("sticker-secret"))
          }}
          size="sm"
          variant="outlined"
        >
          {tm("preview.components.fillLongValue")}
        </Button>
        <Button
          onClick={() => {
            setValue("")
          }}
          size="sm"
          variant="text"
        >
          {tm("preview.components.clear")}
        </Button>
      </div>
      <LabelDescription>
        {remaining === 0
          ? "The controlled value is capped at 8 characters."
          : "Typing and paste stay inside the same 8 character limit."}
      </LabelDescription>
    </div>
  )
}

export { Demo, meta }
