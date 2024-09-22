import { Form, Input } from "sticker-ui"

import { usePreviewI18n } from "@/i18n/preview"
import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-danger-soft",
  order: 25,
  titleKey: "preview.components.requiredLayouts",
  descriptionKey:
    "preview.components.requiredFieldsUseStickerBadgesInRoomyLayoutsAndCompactAsterisksInHorizontalLabelColumns",
})

function Demo() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="grid gap-4 rounded-sticker-2xl border-2 border-ink bg-surface p-4 shadow-sticker-md">
        <div className="grid gap-1">
          <h3 className="m-0 text-base leading-6 font-black">
            {tm("preview.components.verticalLayout")}
          </h3>
          <p className="m-0 text-sm leading-6 font-medium text-text-muted">
            {tm("preview.components.roomyFieldsKeepTheFullRequiredBadge")}
          </p>
        </div>
        <Form
          initialValues={{
            team: "Sticker Rangers",
          }}
        >
          <Form.Item
            extra={tm(
              "preview.components.theBadgeReadsClearlyWhenTheLabelSitsAboveTheField",
            )}
            label={tm("preview.components.teamName")}
            name="team"
            rules={[
              {
                message: tm("preview.components.teamNameIsRequired"),
                required: true,
                whitespace: true,
              },
            ]}
          >
            <Input placeholder={tm("preview.components.stickerRangers")} />
          </Form.Item>
          <Form.Item
            extra={tm(
              "preview.components.optionalHelperFieldsDoNotReceiveARequiredMark",
            )}
            label={tm("preview.components.notes")}
          >
            <Input
              placeholder={tm(
                "preview.components.anythingTheTeamShouldRemember",
              )}
            />
          </Form.Item>
        </Form>
      </section>
      <section className="grid gap-4 rounded-sticker-2xl border-2 border-ink bg-surface p-4 shadow-sticker-md">
        <div className="grid gap-1">
          <h3 className="m-0 text-base leading-6 font-black">
            {tm("preview.components.horizontalLayout")}
          </h3>
          <p className="m-0 text-sm leading-6 font-medium text-text-muted">
            {tm(
              "preview.components.narrowLabelColumnsSwitchRequiredFieldsToAnAsterisk",
            )}
          </p>
        </div>
        <Form
          initialValues={{
            handle: "@sticker-rangers",
          }}
          layout="horizontal"
        >
          <Form.Item
            extra={tm(
              "preview.components.theCompactMarkLeavesMoreRoomForLabelText",
            )}
            label={tm("preview.components.profileHandle")}
            name="handle"
            rules={[
              {
                message: tm("preview.components.profileHandleIsRequired"),
                required: true,
                whitespace: true,
              },
            ]}
          >
            <Input placeholder={tm("preview.components.stickerRangers")} />
          </Form.Item>
          <Form.Item
            extra={tm("preview.components.noRequiredRuleMeansNoMarker")}
            label={tm("preview.components.displayNote")}
          >
            <Input
              placeholder={tm("preview.components.shownBesideTheProfile")}
            />
          </Form.Item>
        </Form>
      </section>
    </div>
  )
}

export { Demo, meta }
