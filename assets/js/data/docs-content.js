/* CoreCaseX documentation catalog; article prose lives under assets/content/docs/. */
window.COREX_DOCS = {
  "schemaVersion": 2,
  "meta": {
    "product": "CoreCaseX",
    "articleCount": 18,
    "editingModel": "Article HTML is maintained in assets/content/docs/. This file contains the catalog; tools/build-docs-bundle.mjs assembles the offline bodies.",
    "pluginVersion": "2026.1.1"
  },
  "navigation": {
    "scope": "reference/source-notes",
    "troubleshooting": "reference/troubleshooting"
  },
  "groups": [
    { "id": "overview", "label": "Feature overview", "icon": "layers" },
    { "id": "getting-started", "label": "Getting started", "icon": "compass" },
    { "id": "paper", "label": "Paper configuration", "icon": "server" },
    { "id": "reference", "label": "Reference & operations", "icon": "book" }
  ],
  "hubs": {
    "instructionStarts": ["getting-started/installation", "getting-started/reload-and-restart"],
    "searchSuggestions": ["overview/workflow", "paper/config-yml", "reference/commands-and-permissions"],
    "overviewCategories": [
      { "id": "start-here", "title": "Start here", "articles": ["introduction", "current-state"] },
      { "id": "case-system", "title": "Case system", "articles": ["features", "workflow"] }
    ]
  },
  "articles": [
    { "id": "overview/introduction", "group": "overview", "title": "Introduction", "description": "What CoreCaseX is and where to begin.", "icon": "file", "bodyFile": "assets/content/docs/overview/introduction.html" },
    { "id": "overview/current-state", "group": "overview", "title": "Current state", "description": "Verified platform, dependency and release scope for 2026.1.1.", "icon": "file", "bodyFile": "assets/content/docs/overview/current-state.html" },
    { "id": "overview/features", "group": "overview", "title": "Feature overview", "description": "Five case types, evidence, notifications and staff capabilities.", "icon": "file", "bodyFile": "assets/content/docs/overview/features.html" },
    { "id": "overview/workflow", "group": "overview", "title": "Case and interface workflow", "description": "Inventory-first navigation, Dialog input and case-state transitions.", "icon": "file", "bodyFile": "assets/content/docs/overview/workflow.html" },

    { "id": "getting-started/installation", "group": "getting-started", "title": "Installation", "description": "Requirements, first boot, generated files and first validation.", "icon": "compass", "bodyFile": "assets/content/docs/getting-started/installation.html" },
    { "id": "getting-started/reload-and-restart", "group": "getting-started", "title": "Reload and restart boundaries", "description": "Which changes reload and when SQLite requires a restart.", "icon": "compass", "bodyFile": "assets/content/docs/getting-started/reload-and-restart.html" },
    { "id": "getting-started/faq", "group": "getting-started", "title": "Frequently asked questions", "description": "Practical answers for server owners and staff leads.", "icon": "book", "bodyFile": "assets/content/docs/getting-started/faq.html" },

    { "id": "paper/config-yml", "group": "paper", "title": "config.yml", "description": "Limits, cooldown and in-game staff notifications.", "icon": "file", "configFile": { "type": "config-file", "id": "paper/config.yml" }, "bodyFile": "assets/content/docs/paper/config-yml.html" },
    { "id": "paper/case-types-yml", "group": "paper", "title": "case-types.yml", "description": "Case availability, priorities, choices and location defaults.", "icon": "file", "configFile": { "type": "config-file", "id": "paper/case-types.yml" }, "bodyFile": "assets/content/docs/paper/case-types-yml.html" },
    { "id": "paper/messages-yml", "group": "paper", "title": "messages.yml", "description": "Command, menu, Dialog and notification text.", "icon": "file", "configFile": { "type": "config-file", "id": "paper/messages.yml" }, "bodyFile": "assets/content/docs/paper/messages-yml.html" },
    { "id": "paper/storage-yml", "group": "paper", "title": "storage.yml", "description": "SQLite path validation and restart behavior.", "icon": "file", "configFile": { "type": "config-file", "id": "paper/storage.yml" }, "bodyFile": "assets/content/docs/paper/storage-yml.html" },
    { "id": "paper/discord-yml", "group": "paper", "title": "discord.yml", "description": "Optional webhook routes, events, colors and failure behavior.", "icon": "file", "configFile": { "type": "config-file", "id": "paper/discord.yml" }, "bodyFile": "assets/content/docs/paper/discord-yml.html" },

    { "id": "reference/commands-and-permissions", "group": "reference", "title": "Commands and permissions", "description": "Player, staff and administrator command contracts.", "icon": "book", "bodyFile": "assets/content/docs/reference/commands-and-permissions.html" },
    { "id": "reference/storage-and-backup", "group": "reference", "title": "SQLite, backup and recovery", "description": "Persistence, transactions, safe backups and path changes.", "icon": "database", "bodyFile": "assets/content/docs/reference/storage-and-backup.html" },
    { "id": "reference/troubleshooting", "group": "reference", "title": "Troubleshooting", "description": "Runtime, workflow, permission, storage and webhook checks.", "icon": "book", "bodyFile": "assets/content/docs/reference/troubleshooting.html" },
    { "id": "reference/production-checklist", "group": "reference", "title": "Production validation checklist", "description": "A complete pre-launch player, staff, storage and Discord exercise.", "icon": "book", "bodyFile": "assets/content/docs/reference/production-checklist.html" },
    { "id": "reference/support-policy", "group": "reference", "title": "Release and support policy", "description": "Public releases, previews, critical fixes and optional support.", "icon": "book", "bodyFile": "assets/content/docs/reference/support-policy.html" },
    { "id": "reference/source-notes", "group": "reference", "title": "Source notes and documentation scope", "description": "Evidence boundary, known ineffective settings and public links.", "icon": "book", "bodyFile": "assets/content/docs/reference/source-notes.html" }
  ]
};
