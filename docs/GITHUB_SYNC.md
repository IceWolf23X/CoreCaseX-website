# CoreCaseX public-default synchronization

`tools/config-sync-map.mjs` is the allow-list contract. It names `IceWolf23X/CoreCaseX-plugin`, ref `main`, and exactly five files under `src/main/resources`: `config.yml`, `case-types.yml`, `messages.yml`, `storage.yml` and `discord.yml`.

Local refresh:

```powershell
node tools/sync-plugin-configs.mjs ../plugin .
node tools/build-config-bundle.mjs .
node tools/build-docs-bundle.mjs .
```

Published snapshots are normalized to LF and carry source provenance; they are not described as byte-identical source copies. Runtime databases, player/state data, descriptors, archives and build output are excluded.

The optional workflow must skip manual/dispatch synchronization with a notice when `COREX_PLUGIN_READ_TOKEN` is absent. If enabled, use a repository-scoped read token for the private plugin repository and keep it only in GitHub Actions secrets. The workflow does not authorize releases, Pages enablement or plugin-repository changes.
