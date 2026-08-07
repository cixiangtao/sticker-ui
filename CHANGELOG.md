# Changelog

Notable public changes to Sticker UI are recorded here. The project follows
[Semantic Versioning](https://semver.org/spec/v2.0.0.html) and is currently in
beta.

## [1.0.1-beta.1](https://github.com/cixiangtao/sticker-ui/compare/v1.0.0-beta.1...v1.0.1-beta.1) (2026-08-07)


### Bug Fixes

* **deploy:** align Wrangler workflow version ([#8](https://github.com/cixiangtao/sticker-ui/issues/8)) ([01a0d64](https://github.com/cixiangtao/sticker-ui/commit/01a0d64a306c9618929f37659e0ef129ac37726b))

## [Unreleased]

### Added

- MIT licensing, contribution guidance, support and security policies, and
  structured Issue and pull request templates.
- Pull request CI, CodeQL analysis, Dependabot updates, and immutable GitHub
  Action references.
- npm trusted publishing with automatic provenance and GitHub Release creation.

### Changed

- Cloudflare deployment now runs the complete CI contract before publishing.
- Stable and beta releases now use separate, explicit release commands and npm
  channels.
- The internal TanStack route kit is explicitly private.

## [1.0.0-beta.1] - 2026-07-27

### Added

- Canonical repository, issue tracker, and Cloudflare preview links in package
  metadata.
- A GitHub-specific full README and a compact npm package README.
- Cloudflare Workers deployment for the preview and source Registry.

### Changed

- Published prereleases through the npm `beta` channel.
- Extended the npm registry timeout used by the release flow.

### Removed

- Obsolete GitLab and earlier preview deployment tooling from the active
  delivery path.

## [1.0.0-beta.0] - 2026-07-17

- First public beta release of the npm package and source Registry.

[Unreleased]: https://github.com/cixiangtao/sticker-ui/compare/v1.0.0-beta.1...HEAD
[1.0.0-beta.1]: https://github.com/cixiangtao/sticker-ui/compare/v1.0.0-beta.0...v1.0.0-beta.1
[1.0.0-beta.0]: https://github.com/cixiangtao/sticker-ui/tree/v1.0.0-beta.0
