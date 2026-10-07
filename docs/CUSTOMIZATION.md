# CoreCaseX website customization

- Edit identity, links, release source, hero logo and palette in `assets/js/data/site-config.js`.
- Edit landing copy and section order in `assets/js/data/landing-content.js`.
- Edit catalog metadata in `assets/js/data/docs-content.js` and prose in the matching `assets/content/docs/` HTML file.
- Rebuild article bodies after any prose change with `node tools/build-docs-bundle.mjs .`.
- Refresh public defaults with `node tools/sync-plugin-configs.mjs ../plugin .`, then rebuild the config bundle.

Keep the site Paper-only. Do not add proxy, network, MySQL or client-platform claims. The supplied logo remains the static hero image until real product screenshots are intentionally added. Stable legacy anchors belong in authored article headings and `legacy-routes.js`.

All JavaScript data is public. Never add a repository token, Discord webhook, password or server database path containing private information.
