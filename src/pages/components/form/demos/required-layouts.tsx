import { Form, Input } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-fill-danger-soft",
  order: 25,
  titleKey: "preview.components.requiredLayouts",
  descriptionKey:
    "preview.components.requiredFieldsUseStickerBadgesInRoomyLayoutsAndCompactAsterisksInHorizontalLabelColumns",
})

function Demo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="grid gap-4 rounded-sticker-2xl border-2 border-ink bg-surface p-4 shadow-sticker-md">
        <div className="grid gap-1">
          <h3 className="m-0 text-base leading-6 font-black">
            Vertical Layout
          </h3>
          <p className="m-0 text-sm leading-6 font-medium text-text-muted">
            Roomy fields keep the full required badge.
          </p>
        </div>
        <Form
          initialValues={{
            team: "Sticker Rangers",
          }}
        >
          <Form.Item
            extra="The badge reads clearly when the label sits above the field."
            label="Team Name"
            name="team"
            rules={[
              {
                message: "Team Name Is Required",
                required: true,
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Sticker Rangers" />
          </Form.Item>
          <Form.Item
            extra="Optional helper fields do not receive a required mark."
            label="Notes"
          >
            <Input placeholder="Anything the team should remember." />
          </Form.Item>
        </Form>
      </section>
      <section className="grid gap-4 rounded-sticker-2xl border-2 border-ink bg-surface p-4 shadow-sticker-md">
        <div className="grid gap-1">
          <h3 className="m-0 text-base leading-6 font-black">
            Horizontal Layout
          </h3>
          <p className="m-0 text-sm leading-6 font-medium text-text-muted">
            Narrow label columns switch required fields to an asterisk.
          </p>
        </div>
        <Form
          initialValues={{
            handle: "@sticker-rangers",
          }}
          layout="horizontal"
        >
          <Form.Item
            extra="The compact mark leaves more room for label text."
            label="Profile Handle"
            name="handle"
            rules={[
              {
                message: "Profile Handle Is Required",
                required: true,
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Sticker Rangers" />
          </Form.Item>
          <Form.Item
            extra="No required rule means no marker."
            label="Display Note"
          >
            <Input placeholder="Shown beside the profile" />
          </Form.Item>
        </Form>
      </section>
    </div>
  )
}

export { Demo, meta }
