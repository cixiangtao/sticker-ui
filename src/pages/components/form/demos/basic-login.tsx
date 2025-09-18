import { useState } from "react"
import {
  Button,
  Checkbox,
  Form,
  Input,
  RadioGroup,
  Select,
  Switch,
  Tag,
  Textarea,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-warning",
  order: 10,
  titleKey: "preview.components.basicLogin",
  descriptionKey:
    "preview.components.formKeepsAnAntdLikeApiWhileTheFieldShellCarriesTheStickerLabelHelperAndErrorStates",
})

function Demo() {
  const [submittedValues, setSubmittedValues] = useState(
    "No project submitted yet",
  )

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <Form
        initialValues={{
          consent: true,
          email: "hello@sticker.dev",
          notes: "Ship a warm, copyable component registry.",
          password: "",
          plan: "team",
          role: "maintainer",
          updates: true,
        }}
        onFinish={(values) => {
          setSubmittedValues(
            [
              String(values.email ?? ""),
              String(values.plan ?? "no plan"),
              values.updates ? "updates on" : "updates off",
            ].join(" / "),
          )
        }}
      >
        <Form.Item
          extra="Use the same name and rules shape you would expect from ant design."
          label="Email"
          name="email"
          rules={[
            {
              message: "Email Is Required",
              required: true,
              whitespace: true,
            },
            {
              message: "Use a valid email address.",
              type: "email",
            },
          ]}
        >
          <Input placeholder="Hello Sticker Dev" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              message: "Password Is Required",
              required: true,
            },
            { message: "Use at least 6 characters.", min: 6 },
          ]}
        >
          <Input.Password
            hideLabel="Hide"
            placeholder="Enter Password"
            showLabel="Show"
          />
        </Form.Item>
        <Form.Item
          extra="Select keeps a Form.Item-friendly onChange value alias."
          label="Plan"
          name="plan"
          rules={[
            {
              message: "Choose a workspace plan.",
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Trigger>
              <Select.Value placeholder="Choose A Plan" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="starter">Starter</Select.Item>
              <Select.Item value="team">Team</Select.Item>
              <Select.Item value="studio">Studio</Select.Item>
            </Select.Content>
          </Select>
        </Form.Item>
        <Form.Item
          extra="RadioGroup also reports the next value through onChange."
          label="Role"
          name="role"
        >
          <RadioGroup className="grid gap-3 sm:grid-cols-3">
            <RadioGroup.Item label="Owner" value="owner" />
            <RadioGroup.Item label="Maintainer" value="maintainer" />
            <RadioGroup.Item label="Viewer" value="viewer" />
          </RadioGroup>
        </Form.Item>
        <Form.Item
          extra="Textarea uses the same value and onChange contract as Input."
          label="Project Notes"
          name="notes"
        >
          <Textarea placeholder="Tell the team what this form should remember." />
        </Form.Item>
        <div className="grid gap-3 sm:grid-cols-2">
          <Form.Item
            extra="Checkbox stores checked through onCheckedChange."
            name="consent"
            trigger="onCheckedChange"
            valuePropName="checked"
            label="Consent"
          >
            <Checkbox label="Accept Terms" />
          </Form.Item>
          <Form.Item
            extra="Switch uses the same checked binding for toggle settings."
            label="Email Updates"
            name="updates"
            trigger="onCheckedChange"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
        </div>
        <Button type="submit">Submit Form</Button>
      </Form>
      <div className="grid content-start gap-3 rounded-su-2xl border-2 border-su-ink bg-su-surface p-4 shadow-su-md">
        <Tag color="success" dot>
          Latest Submit
        </Tag>
        <p className="m-0 text-sm leading-6 font-bold">{submittedValues}</p>
      </div>
    </div>
  )
}

export { Demo, meta }
