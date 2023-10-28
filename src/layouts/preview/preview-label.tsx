import type { ComponentProps } from "react"

import {
  Label as BaseLabel,
  LabelMarker as BaseLabelMarker,
  LabelDescription,
} from "sticker-ui"

import { usePreviewI18n } from "../../i18n/preview"

function Label({
  children,
  optional,
  required,
  tone,
  ...props
}: ComponentProps<typeof BaseLabel>) {
  const { t } = usePreviewI18n()

  return (
    <BaseLabel tone={tone} {...props}>
      {children}
      {required ? (
        <BaseLabelMarker tone={tone}>{t("required")}</BaseLabelMarker>
      ) : null}
      {optional ? (
        <BaseLabelMarker tone="muted">{t("optional")}</BaseLabelMarker>
      ) : null}
    </BaseLabel>
  )
}

function LabelMarker(props: ComponentProps<typeof BaseLabelMarker>) {
  return <BaseLabelMarker {...props} />
}

export { Label, LabelDescription, LabelMarker }
