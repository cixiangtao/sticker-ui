import { ArchiveRestore, Inbox, Search } from "lucide-react"
import { Button, Empty } from "sticker-ui"

import { defineMeta } from "@/layouts/preview"

const meta = defineMeta({
  className: "bg-su-fill-secondary",
  order: 40,
  titleKey: "preview.components.shortcutProps",
  descriptionKey:
    "preview.components.emptyShortcutPropsCoverSemanticRootsIconOverridesActionsAndAccessibleIcons",
})

function Demo() {
  return (
    <div className="grid w-full max-w-4xl gap-4 lg:grid-cols-2">
      <Empty
        actions={
          <>
            <Button size="sm">
              <Search />
              Search again
            </Button>
            <Button size="sm" variant="outlined">
              <ArchiveRestore />
              Restore archive
            </Button>
          </>
        }
        as="article"
        description="Use the shortcut props when a simple empty state does not need custom slots."
        heading="No archived notes"
        icon={<Inbox />}
        tone="secondary"
        variant="outlined"
      />
      <Empty size="sm" tone="info" variant="plain">
        <Empty.Icon decorative={false} role="img" aria-label="Open inbox">
          <Inbox />
        </Empty.Icon>
        <Empty.Title>Accessible icon slot</Empty.Title>
        <Empty.Description>
          Set decorative=false when the icon carries useful meaning.
        </Empty.Description>
      </Empty>
    </div>
  )
}

export { Demo, meta }
