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

## Privacy notice and crawl discovery

- `assets/content/privacy.json` — Editable English website notice, confirmed controller/contact, providers, retention criteria and rights; separate from the plugin documentation catalog.
- `assets/content/seo.json` — Canonical maintained page inventory: home, full reference and privacy; excludes hash routes and compatibility redirects.
- `assets/js/data/ui-text.js` — Shared `legal` destination/label used by landing, wiki, Releases and full-reference navigation.
- `privacy.html`, `tools/build-privacy-page.mjs` — Generated static notice readable without JavaScript; uses public site identity/storage settings. `--check` validates freshness.
- `assets/css/legal.css`, `assets/js/core/legal-page.js` — Scoped legal layout and existing theme preference; no additional network or storage services.
- `sitemap.xml`, `robots.txt`, `tools/build-sitemap.mjs` — Deterministic canonical XML and crawler reference; preserves other robots directives, omits unverified modification dates.
- `assets/js/boot.js` — Preserves standalone title, description and existing canonical while applying the shared theme.
- `tools/prepare-pages.mjs`, `.github/workflows/deploy-pages.yml` — Package legal/crawler outputs, reject stale generated content and rebuild it in the optional Pages workflow.
- `tests/legal-seo.test.mjs` — Authored-text escaping, stale-output preservation, invalid links/routes, crawler directives and Pages packaging contracts.
- `docs/PRIVACY_AND_SEO.md` — Editing/build workflow, infrastructure evidence, references and operational boundaries.

- `tools/build-page-meta.mjs` — Generates static product-specific home/reference title, description and canonical from `assets/content/seo.json` templates and site identity; preserves application shells and supports read-only freshness validation. Pages preflight/workflow include this contract.

- `assets/js/app.js` — Restores the generated homepage title when returning from wiki or Releases, keeping authored initial and rendered metadata consistent.
