import { Avatar } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-info",
  order: 10,
  titleKey: "preview.components.initialsStack",
  descriptionKey:
    "preview.components.avatarFallbacksKeepPeopleAndTeamListsReadableWithoutImages",
})

function Demo() {
  return (
    <div className="flex items-center">
      {["AM", "BK", "CL", "DN"].map((initials, index) => (
        <Avatar
          aria-label={`Team member ${initials}`}
          className={index ? "-ml-3" : undefined}
          key={initials}
          tone={["default", "info", "success", "warning"][index] as never}
        >
          <Avatar.Fallback>{initials}</Avatar.Fallback>
        </Avatar>
      ))}
    </div>
  )
}

export { Demo, meta }
