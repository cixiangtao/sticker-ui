# Releasing Sticker UI

Sticker UI uses `release-it` only to prepare the package version, lockfile, and
local release commit. A dedicated Release PR admits that commit to `main`.
`.github/workflows/publish.yml` verifies the merged PR, creates the Git tag at
its merge commit, publishes npm through trusted publishing, and creates the
GitHub Release in one Actions chain.

## Release contract

- `package.json` owns the public version.
- Release branches are created from a clean, synchronized `main` branch and use `release/v<version>`.
- `pnpm release:check` is the required local gate.
- Stable tags publish to npm `latest` and create the latest GitHub Release.
- Beta tags publish to npm `beta` and create a GitHub prerelease.
- Tags and release commits use `v<version>` and
  `chore(release): v<version>`.
- Release PRs may change only `package.json`, `pnpm-lock.yaml`, and `CHANGELOG.md`.
- GitHub generates release notes from merged changes.

Before the first release with this workflow, configure npm trusted publishing
for:

- provider: GitHub Actions;
- organization or user: `cixiangtao`;
- repository: `sticker-ui`;
- workflow filename: `publish.yml`;
- allowed action: `npm publish`.

The workflow uses GitHub OIDC and does not require a stored npm publish token.
After the first trusted publication succeeds, restrict traditional token-based
publishing in the npm package settings.

## Beta release

Preview the next beta:

```bash
pnpm release:dry:beta
```

Prepare the beta commit on `release/v<version>`:

```bash
pnpm release:prepare:beta -- <version>
```

To start a new beta series from a stable version, invoke release-it with the
intended SemVer increment and an explicit beta identifier:

```bash
pnpm exec release-it premajor --preReleaseId=beta
```

Use `preminor` or `prepatch` instead when that matches the intended compatibility
boundary.

## Stable release

Preview the next stable release:

```bash
pnpm release:dry
```

Prepare the stable commit on `release/v<version>`:

```bash
pnpm release:prepare -- <version>
```

The stable command must only be used for a version without a prerelease
identifier. Update `CHANGELOG.md`, push the release branch, and open a Release
PR against `main`. Publication starts only after that PR passes CI and is merged;
unrelated open PRs may remain open.

## Post-release verification

After the Release PR is merged, wait for the `Publish package` workflow to
complete. Then:

1. Confirm `main` and `v<version>` resolve to the intended commit.
2. Confirm the GitHub Release title, notes, and prerelease flag.
3. Inspect both npm `latest` and `beta` dist-tags.
4. Download the published tarball and verify its version, LICENSE, README,
   exports, type declarations, and token stylesheet.
5. Install the published package in a fresh temporary project and import a
   representative component.
6. Confirm the Cloudflare preview and `/r/registry.json` remain available.

If any step fails, inspect the worktree, index, local and remote tags, npm
version, dist-tags, and GitHub Release before retrying. Do not assume a failed
or interrupted release was fully rolled back.
