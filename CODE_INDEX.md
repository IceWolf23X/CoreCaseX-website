# CoreCaseX website code index

## Entry points and product data

- `index.html` — shared landing/wiki/release shell.
- `reference.html` — offline full-reference shell using the same catalog and generated bodies.
- `assets/js/data/site-config.js` — CoreCaseX identity, Modrinth/issues/CNAME links, logo, theme and public website-release source.
- `assets/js/data/landing-content.js` — Paper-only product landing content.
- `assets/js/data/docs-content.js` — 18-article catalog in overview, getting-started, paper and reference groups.
- `assets/content/docs/**/*.html` — maintained article bodies; five Paper configuration articles mount generated default snapshots.

## Compatibility and generated data

- `assets/js/legacy-routes.js` — old page/anchor to wiki-route contract; CommonJS export supports tests.
- `features.html`, `installation.html`, `configuration.html`, `docs.html`, `faq.html`, `support-policy.html` — legacy redirect entrypoints.
- `synced-configs/paper/` — LF-normalized allow-listed defaults from the private plugin checkout.
- `assets/js/generated/config-files.js`, `docs-bodies.js`, `releases.js` — generated offline data; rebuild with repository tools.
- `tools/config-sync-map.mjs` — five-file CoreCaseX allow-list from `IceWolf23X/CoreCaseX-plugin` ref `main`.
- `tools/*.mjs` — shared synchronization, bundle, release and Pages packaging tools.

## Shared runtime and presentation

- `assets/js/core/`, `assets/js/app.js`, `docs.js`, `search.js`, `boot.js`, `utils.js` — shared rendering, routing, search, gallery and release runtime.
- `assets/css/` and `assets/vendor/` — shared family theme and local syntax-highlighting assets.
- `assets/img/corecasex-logo.png`, `assets/corecasex-logo.svg` — current PNG presentation asset and retained legacy SVG public path.
- `.github/workflows/` — Pages, public releases and optional private-source synchronization.
- `tests/` — structural, route, bundle, release, packaging and browser validation.

## Documentation

- `README.md`, `SETUP.md` — local editing, generation and validation workflow.
- `docs/ARCHITECTURE.md`, `CUSTOMIZATION.md`, `GITHUB_SYNC.md`, `GITHUB_RELEASES.md` — product operating contracts.

Excluded: `.git/`, `_site/`, local caches, credentials, private plugin source beyond the allow-listed snapshots, server SQLite/runtime data, archives and JAR files.

## Shared validation contracts

- `assets/corecasex-logo.svg` — Retained public legacy logo URL; current brand and hero use the supplied PNG.
- `assets/js/data/ui-text.js` — Shared interface labels; product naming comes from site data and platform wording is Paper-only.
- `assets/js/docs.js`, `assets/js/search.js`, `assets/js/core/renderer.js` — Navigation uses catalog metadata (`navigation`, `hubs.instructionStarts`, `searchSuggestions`) rather than another plugin's article IDs.
- `tools/sync-plugin-configs.mjs` — `confinedPath` and `syncDefaults` preflight the declared YAML allowlist, reject path escapes/symlinks/descriptors, normalize LF and record committed-source provenance. The CLI refuses edited source defaults.
- `tests/config-sync.test.mjs` — Boundary, missing-source, normalization and idempotence checks.
- `tests/legacy-contract.json`, `tests/legacy-pages.test.mjs` — Independent baseline of old pages/bookmarks and tests of their maintained article/section targets.
- `tests/browser_docs_content.cjs` — Real offline Chromium validation of every article/config, reference, search, logo and responsive layout; requires an already installed Node Playwright runtime.
- `.gitattributes` — LF policy for authored HTML/data and stable normalized config snapshots.
