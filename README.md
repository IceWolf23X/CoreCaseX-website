# CoreCaseX website

Static, data-driven CoreX website for CoreCaseX 2026.1.1. The landing page, routed wiki, offline reference, configuration snapshots and public release view share the current CoreX family theme while keeping CoreCaseX identity and documentation in product-owned data files.

- Canonical site: <https://wiki-corecasex.icewolf23x.dev/>
- Download: <https://modrinth.com/plugin/corecasex>
- Issues: <https://github.com/IceWolf23X/CoreCaseX-issues/issues>

## Local content workflow

From this directory:

```powershell
node tools/sync-plugin-configs.mjs ../plugin .
node tools/build-config-bundle.mjs .
node tools/build-docs-bundle.mjs .
node tests/validate-theme.mjs
node --test tests/*.test.mjs tests/*.test.cjs
```

The sync command copies only the five allow-listed defaults from `../plugin/src/main/resources/`, normalizes published text to LF, and records source repository/ref/commit provenance. It never reads runtime server data or archives. Article prose lives under `assets/content/docs/`; `docs-content.js` contains only catalog metadata and source paths.

## Editing map

- `assets/js/data/site-config.js`: public identity, links, logo, palette and release repository.
- `assets/js/data/landing-content.js`: landing sections and product copy.
- `assets/js/data/docs-content.js`: documentation catalog and navigation hints.
- `assets/content/docs/**/*.html`: independently editable article prose.
- `tools/config-sync-map.mjs`: five-file public default allow-list.
- `assets/js/legacy-routes.js` and legacy root HTML: old URL/bookmark compatibility.
- `SETUP.md`: complete local, sync and validation workflow.

The primary Download action uses Modrinth. The GitHub Releases view reads public releases from `IceWolf23X/CoreCaseX-website` and may accurately show an empty catalog. No token is exposed to the browser.

Do not publish or link the private plugin descriptor, server data, credentials or private repository content. Optional private-source automation remains disabled until a repository-scoped read token is configured by the repository owner.
