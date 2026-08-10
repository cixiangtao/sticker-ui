# Contributing to Sticker UI

English | [简体中文](CONTRIBUTING.zh-CN.md)

Thanks for helping improve Sticker UI. Contributions should preserve the
source-first registry model, accessible behavior, and handbook sticker visual
language.

## Before opening a change

- Search existing issues and pull requests for related work.
- Use an issue to discuss broad API changes or new dependencies before
  investing in a large implementation.
- Keep changes focused. Avoid combining component work with unrelated tooling
  or documentation cleanup.
- Report security vulnerabilities through the process in
  [SECURITY.md](SECURITY.md), not through a public issue.

## Development setup

Use Node.js 22 and the pnpm version pinned in `package.json`.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

The local preview runs at <http://localhost:7777>.

## Project checks

Run the checks that match your change:

```bash
pnpm lint:fix
pnpm test
pnpm build:registry
pnpm build:preview
```

Before opening a pull request, run the complete CI contract:

```bash
pnpm run ci
```

This validates formatting, lint, types, tests, package exports, the preview
build, generated Registry and API documentation, and the npm package contents.

## Component contributions

- Keep canonical component source in `src/components/ui/<name>.tsx`.
- Keep Registry items in `registry.json` pointed at canonical `src` files.
- Do not edit generated files under `public/r` by hand.
- Add or update component demos, preview routes, API documentation, and
  translations with the component change.
- Keep public APIs documented with TSDoc comments.
- Preserve named exports and namespace-style compound APIs such as
  `Dialog.Content`.
- Declare focused runtime dependencies on the Registry item that uses them.

Run `pnpm build:registry` after Registry or component source changes, and run
`pnpm build:preview` after preview, route, demo, or API documentation changes.

## Commits and pull requests

Commit messages follow Conventional Commits, for example:

```text
feat(button): add loading state
fix(dialog): restore focus after close
docs(readme): clarify registry installation
```

A pull request should explain the user-facing outcome, identify relevant
tests, and include screenshots or recordings for visible interaction changes.
Maintainers may ask for a smaller scope when a change mixes independent
concerns.

By contributing, you agree that your contribution is licensed under the
[MIT License](LICENSE).
