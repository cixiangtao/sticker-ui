# Releasing Sticker UI

GitHub Actions is the only npm and GitHub Release publisher. Release Please automatically creates
or updates the release pull request; maintainers do not bump versions, create tags, or publish from
a workstation.

## Release contract

- `package.json` and `.release-please-manifest.json` own the synchronized public version.
- Ordinary changes enter protected `main` through pull requests and required checks. Unrelated open
  pull requests do not block release.
- Release Please maintains one PR from a `release-please--branches--main--...` branch and updates
  only release metadata.
- Conventional commit or squash-merge titles determine the proposed SemVer version and
  `CHANGELOG.md`: `fix` = patch, `feat` = minor, and `!` or `BREAKING CHANGE` = major.
- After that exact automated PR merges, `.github/workflows/publish.yml` revalidates its restricted
  diff, builds and packs once, creates `v<version>`, publishes the inspected npm artifact, and
  creates the matching GitHub Release.
- The current Release Please configuration keeps the project on the `beta` prerelease channel.
  Stable versions require a reviewed ordinary PR that deliberately removes the prerelease settings
  before the next automated release PR is merged.

## Maintainer flow

1. Merge product and documentation changes through ordinary PRs.
2. Review the automated release PR's version, changelog, restricted diff, and required CI.
3. Merge it when the accumulated changes are ready to publish.
4. Wait for `Publish package` to complete, then confirm the tag target, GitHub Release title and
   prerelease flag, npm `latest` and `beta` dist-tags, public tarball, fresh consumer import,
   Cloudflare preview, and `/r/registry.json`.

Do not manually edit the automated branch, create or push release tags, or run `npm publish`.

## Required configuration

Configure npm trusted publishing for GitHub Actions, user `cixiangtao`, repository `sticker-ui`,
workflow `publish.yml`, and the `npm` environment.

Also define Actions variable `RELEASE_APP_CLIENT_ID` and secret `RELEASE_APP_PRIVATE_KEY` for a
GitHub App installed on this repository with Contents, Issues, and Pull requests read/write
permissions. Its token lets required CI run unattended; PR checks created with the default
`GITHUB_TOKEN` currently wait for separate workflow approval.

If delivery partially succeeds, inspect the merged release PR, workflow, tag, GitHub Release, npm
version, and dist-tags before retrying the same workflow. Do not assume an interrupted release was
rolled back, and never reuse an already published version.
