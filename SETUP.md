# CoreCaseX website setup

## Requirements

- An existing Node.js runtime supported by the repository tools.
- The local `../plugin` checkout only when refreshing public defaults.
- No npm install is required for the repository's Node validation tools.

## Edit product content

Identity, URLs, release source, logo and colors live in `assets/js/data/site-config.js`. Landing prose lives in `landing-content.js`. The wiki catalog lives in `docs-content.js`; article bodies live under `assets/content/docs/`.

Keep article IDs lowercase and limited to letters, digits, hyphens and one group slash. Add stable heading IDs when a section may be linked. Keep the four groups `overview`, `getting-started`, `paper` and `reference` unless the shared engine is deliberately changed.

## Hero preview

`assets/js/data/site-config.js -> assets.heroPreview.images` currently contains one supplied CoreCaseX logo, so the preview rendered by `index.html` is a static image without rotation controls. `objectFit: 'contain'` keeps the complete logo visible. Replace or extend that public array when real product captures are available; two or more valid images activate the shared gallery behavior.

## Refresh public plugin defaults

The manifest allow-lists only `config.yml`, `case-types.yml`, `messages.yml`, `storage.yml` and `discord.yml` from `src/main/resources/` in source repository `IceWolf23X/CoreCaseX-plugin` at ref `main`.

```powershell
node tools/sync-plugin-configs.mjs ../plugin .
node tools/build-config-bundle.mjs .
```

The sync writes LF-normalized public snapshots under `synced-configs/paper/` and provenance in `synced-configs/.sync-state.json`. It intentionally excludes the descriptor, SQLite data, player data, logs, archives and build output.

## Rebuild article bodies

```powershell
node tools/build-docs-bundle.mjs .
node tools/build-docs-bundle.mjs . --check
```

The first command writes the offline bundle used by `file://` and hosted routes. The check command verifies that catalog entries, body files and generated content agree.

## Validate locally

```powershell
node tests/validate-theme.mjs
node --test tests/*.test.mjs tests/*.test.cjs
```

Use the browser acceptance command documented by the shared test harness when its Playwright runtime is available. Validate landing, wiki routes, configuration mounts, search, release empty-state, responsive navigation, dark mode and every legacy page/anchor.

## Optional private-source automation

The synchronization workflow reads `tools/config-sync-map.mjs`. Manual and dispatch runs must skip with a clear notice when `COREX_PLUGIN_READ_TOKEN` is absent. Configure only a repository-scoped read token for the private plugin repository. Never place the token in JavaScript, docs, snapshots, logs or commits.

## Downloads and releases

The primary product download is Modrinth. The release tab reads public GitHub Releases from `IceWolf23X/CoreCaseX-website`; zero releases is a valid current state. Publishing, enabling Pages, creating releases and pushing commits are separate authorized operations.
