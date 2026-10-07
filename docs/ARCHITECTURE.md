# CoreCaseX website architecture

`index.html` and `reference.html` are shared shells. Product identity and public links come from `assets/js/data/site-config.js`; landing sections come from `landing-content.js`; the wiki catalog comes from `docs-content.js`; prose comes from `assets/content/docs/**/*.html`.

The documentation builder assembles article bodies into `assets/js/generated/docs-bodies.js` for offline `file://` use. Five configuration articles declare `configFile` IDs and mount LF-normalized snapshots from `assets/js/generated/config-files.js`.

```text
CoreCaseX-plugin/src/main/resources (five allow-listed YAML files)
  -> tools/config-sync-map.mjs
  -> synced-configs/paper/ + provenance
  -> tools/build-config-bundle.mjs
  -> assets/js/generated/config-files.js
```

The browser never receives a private token. GitHub Releases are read from the public website repository and may be empty; the primary download link is Modrinth. Legacy root pages run `assets/js/legacy-routes.js` to preserve old page and section bookmarks.

Runtime/server SQLite data, the plugin descriptor, logs, JARs, archives and credentials are outside the public-data pipeline.
