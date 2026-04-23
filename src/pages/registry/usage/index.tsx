import { usePreviewI18n } from "@/i18n/preview"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/layouts/preview"

const ENVIRONMENT_REQUIREMENTS = [
  {
    descriptionKey:
      "preview.components.installRequiresReactDomBecauseOverlayAndPortalComponentsMountIntoTheDocument",
    label: "React DOM",
    valueKey: "preview.components.version18Or19",
  },
  {
    descriptionKey:
      "preview.components.installRequiresReactBecauseEveryComponentShipsAsReactSource",
    label: "React",
    valueKey: "preview.components.version18Or19",
  },
  {
    descriptionKey:
      "preview.components.installRequiresTailwindV4BecauseTokensAreExposedAsCssFirstThemeValues",
    label: "Tailwind CSS",
    valueKey: "preview.components.version4",
  },
  {
    descriptionKey:
      "preview.components.installRequiresABundlerThatCanImportPackageCssFromNodeModules",
    label: "CSS bundler",
    valueKey: "preview.components.viteNextOrEquivalent",
  },
] as const

const INSTALL_CHOICES = [
  {
    descriptionKey:
      "preview.components.packageInstallKeepsComponentsManagedByNpmAndImportsFromStickerUi",
    labelKey: "preview.components.packageInstall",
  },
  {
    descriptionKey:
      "preview.components.registryInstallCopiesComponentSourceWhenAProjectNeedsLocalOwnership",
    labelKey: "preview.components.sourceCustomization",
  },
] as const

const TOKEN_CUSTOMIZATION_NOTES = [
  "preview.components.placeCustomThemeValuesAfterStickerUiTokensSoTheyOverrideTheDefaults",
  "preview.components.keepTheSuTokenNamesWhenYouWantExistingStickerUiUtilitiesToChange",
  "preview.components.addNewSuTokensOnlyWhenYourOwnAppNeedsAdditionalUtilities",
] as const

const LOCAL_BUILD_STEPS = [
  "pnpm install",
  "pnpm dev",
  "pnpm build:registry",
  "pnpm build:preview",
] as const

function RegistryPage() {
  const { tm } = usePreviewI18n()
  return (
    <div className="grid gap-5">
      <Card className="bg-su-fill-warning">
        <CardHeader>
          <CardTitle>
            {tm("preview.components.environmentRequirements")}
          </CardTitle>
          <CardDescription>
            {tm(
              "preview.components.confirmTheHostAppMeetsTheseRequirementsBeforeAddingStickerUi",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {ENVIRONMENT_REQUIREMENTS.map((requirement) => (
              <div
                className="rounded-su-xl border border-su-ink bg-su-surface p-4"
                key={requirement.label}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-black text-su-ink">
                    {requirement.label}
                  </span>
                  <span className="rounded-su-sm border border-su-ink bg-su-paper px-2 py-1 text-xs font-black text-su-ink">
                    {tm(requirement.valueKey)}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 font-bold text-su-ink/75">
                  {tm(requirement.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-su-fill-info">
        <CardHeader>
          <CardTitle>{tm("preview.components.packageInstall")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.installStickerUiOnceThenImportComponentsFromThePackageRoot",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-su-lg border border-su-ink bg-su-surface p-4 text-sm font-bold">
            <code>pnpm add sticker-ui</code>
          </pre>
          <pre className="mt-3 overflow-x-auto rounded-su-lg border border-su-ink bg-su-surface p-4 text-sm font-bold">
            <code>{`import { Button, Card, Dialog } from "sticker-ui"`}</code>
          </pre>
          <p className="mt-4 text-sm font-bold text-su-ink">
            {tm(
              "preview.components.compoundComponentsUseTheMainNamespaceSyntaxFromTheSamePackageImport",
            )}
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {INSTALL_CHOICES.map((choice) => (
              <div
                className="rounded-su-lg border border-su-ink bg-su-paper p-3"
                key={choice.labelKey}
              >
                <div className="font-black text-su-ink">
                  {tm(choice.labelKey)}
                </div>
                <p className="mt-1 text-sm leading-6 font-bold text-su-ink/70">
                  {tm(choice.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-su-fill-success">
        <CardHeader>
          <CardTitle>{tm("preview.components.tailwindSetup")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.importTokensAndPointTailwindAtTheInstalledPackageSoUtilityClassesAreGenerated",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-su-lg border border-su-ink bg-su-surface p-4 text-sm font-bold">
            <code>{`@import "tailwindcss";
@import "sticker-ui/tokens.css";
@source "../node_modules/sticker-ui";`}</code>
          </pre>
          <p className="mt-4 text-sm leading-6 font-bold text-su-ink">
            {tm(
              "preview.components.thePackageDoesNotShipPrecompiledComponentCssSoTailwindMustScanStickerUi",
            )}
          </p>
          <div className="mt-4 rounded-su-xl border border-su-ink bg-su-paper p-4">
            <h3 className="text-sm font-black text-su-ink">
              {tm("preview.components.customizeBuiltInTokens")}
            </h3>
            <p className="mt-2 text-sm leading-6 font-bold text-su-ink/75">
              {tm(
                "preview.components.overrideStickerUiTokensWithTheSameThemeVariableNamesInYourAppCss",
              )}
            </p>
            <pre className="mt-3 overflow-x-auto rounded-su-lg border border-su-ink bg-su-surface p-4 text-sm font-bold">
              <code>{`@theme inline {
  --color-su-ink: #202331;
  --color-su-paper: #fffaf0;
  --color-su-fill-default: #ffd166;
  --radius-su-lg: 18px;
  --shadow-su-md: 4px 4px 0 var(--color-su-ink);
}`}</code>
            </pre>
            <ul className="mt-3 grid gap-2 text-sm leading-6 font-bold text-su-ink/75">
              {TOKEN_CUSTOMIZATION_NOTES.map((note) => (
                <li className="flex gap-2" key={note}>
                  <span aria-hidden="true">-</span>
                  <span>{tm(note)}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-su-fill-secondary">
        <CardHeader>
          <CardTitle>{tm("preview.components.sourceCustomization")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.useTheRegistryWhenAProjectNeedsToCopyAndModifyComponentSource",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-su-lg border border-su-ink bg-su-surface p-4 text-sm font-bold">
            <code>{`pnpm run dev
npx shadcn@latest add http://localhost:7777/r/button.json --dry-run
npx shadcn@latest add http://localhost:7777/r/button.json`}</code>
          </pre>
          <p className="mt-4 text-sm font-bold text-su-ink">
            {tm(
              "preview.components.runTheFinalAddCommandWithoutOverwriteSoShadcnAsksBeforeReplacingLocalFiles",
            )}
          </p>
          <p className="mt-2 text-sm font-bold text-su-ink/70">
            {tm(
              "preview.components.useDiffForACloserLookAtConflictsAndOverwriteOnlyWhenReplacingIsIntentional",
            )}
          </p>
        </CardContent>
      </Card>

      <Card className="bg-su-fill-danger">
        <CardHeader>
          <CardTitle>{tm("preview.components.motionPlugin")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.floatingComponentsUseTailwindcssAnimateForEnterExitMotion",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="overflow-x-auto rounded-su-lg border border-su-ink bg-su-surface p-4 text-sm font-bold">
            <code>{`pnpm add tailwindcss-animate`}</code>
          </pre>
          <pre className="mt-3 overflow-x-auto rounded-su-lg border border-su-ink bg-su-surface p-4 text-sm font-bold">
            <code>{`@plugin "tailwindcss-animate";`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card className="bg-su-fill-warning">
        <CardHeader>
          <CardTitle>{tm("preview.components.buildFlow")}</CardTitle>
          <CardDescription>
            {tm(
              "preview.components.editRegistrySourceBuildJsonThenPublishPublicRAsStaticFiles",
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-4">
            {LOCAL_BUILD_STEPS.map((step, index) => (
              <div
                className="rounded-su-xl border-2 border-su-ink bg-su-surface p-4 shadow-su-sm"
                key={step}
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-su-sm border-2 border-su-ink bg-su-fill-secondary font-black">
                  {index + 1}
                </div>
                <div className="font-extrabold">{step}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 font-bold text-su-ink">
            {tm(
              "preview.components.packageUsersUsuallyNeedOnlyTheInstallStepsWhileMaintainersRunTheRegistryAndPreviewBuilds",
            )}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export { RegistryPage }
