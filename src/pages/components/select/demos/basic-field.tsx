import {
  Label,
  LabelDescription,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-[#EAF7FF]",
  description:
    "Select keeps accessible keyboard behavior while adding a chunky sticker menu and a clear paper indicator.",
  order: 10,
  title: "Basic Field",
})

function Demo() {
  return (
    <div className="grid max-w-xl gap-3">
      <Label htmlFor="select-team-role" required>
        Team role
      </Label>
      <Select defaultValue="designer" id="select-team-role">
        <SelectTrigger>
          <SelectValue placeholder="Choose a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="designer">Design captain</SelectItem>
          <SelectItem value="engineer">Build lead</SelectItem>
          <SelectItem value="researcher">Research scout</SelectItem>
        </SelectContent>
      </Select>
      <LabelDescription>
        Pair Select with Label when a finite option list needs accessible
        captions and helper text.
      </LabelDescription>
    </div>
  )
}

export { Demo }
export default meta
