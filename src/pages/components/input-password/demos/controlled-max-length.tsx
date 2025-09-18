import * as React from "react"
import { Button, Field, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const MAX_PASSWORD_LENGTH = 8

const meta = defineMeta({
  className: "bg-su-fill-success",
  order: 30,
  titleKey: "preview.components.controlledMaxLength",
  descriptionKey:
    "preview.components.keepsAControlledPasswordValueCappedWhileStillUsingTheNativeMaxlengthInputConstraint",
})

function clampPassword(value: string) {
  return value.slice(0, MAX_PASSWORD_LENGTH)
}

function Demo() {
  const [value, setValue] = React.useState("sticker")
  const remaining = MAX_PASSWORD_LENGTH - value.length

  return (
    <div className="grid max-w-xl gap-4">
      <Field
        description={
          remaining === 0
            ? "The controlled value is capped at 8 characters."
            : "Typing and paste stay inside the same 8 character limit."
        }
        label={
          <span className="flex w-full items-end justify-between gap-3">
            <span>Invite Secret</span>
            <span className="rounded-su-sm border border-su-ink bg-su-surface px-2 py-1 text-xs font-extrabold text-su-fg-muted">
              {value.length}/{MAX_PASSWORD_LENGTH}
            </span>
          </span>
        }
      >
        <Input.Password
          autoComplete="new-password"
          hideLabel="Hide"
          maxLength={MAX_PASSWORD_LENGTH}
          onChange={(nextValue) => {
            setValue(clampPassword(nextValue))
          }}
          placeholder="Try typing or pasting a long password."
          showLabel="Show"
          value={value}
        />
      </Field>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => {
            setValue(clampPassword("sticker-secret"))
          }}
          size="sm"
          variant="outlined"
        >
          Fill Long Value
        </Button>
        <Button
          onClick={() => {
            setValue("")
          }}
          size="sm"
          variant="text"
        >
          Clear
        </Button>
      </div>
    </div>
  )
}

export { Demo, meta }
