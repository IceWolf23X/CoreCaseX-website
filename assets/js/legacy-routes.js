/* Preserve the previous CoreCaseX page and section bookmarks in the routed wiki. */
(function (root) {
  'use strict';
  const routes = {
    'features.html': {
      route: '#/docs/overview/features',
      anchors: {
        'case-types': '#/docs/overview/features~case-types',
        'dialog-ui': '#/docs/overview/workflow~inventory-first-dialog-input',
        'staff-board': '#/docs/overview/features~staff-board',
        'workflow': '#/docs/overview/workflow~workflow-rules',
        'evidence': '#/docs/overview/features~evidence',
        'notifications': '#/docs/overview/features~notifications',
        'storage': '#/docs/overview/features~storage',
        'admin': '#/docs/reference/commands-and-permissions'
      }
    },
    'installation.html': {
      route: '#/docs/getting-started/installation',
      anchors: {
        'requirements': '#/docs/getting-started/installation~requirements',
        'install': '#/docs/getting-started/installation~install',
        'generated-files': '#/docs/getting-started/installation~generated-files',
        'reload': '#/docs/getting-started/reload-and-restart',
        'validation': '#/docs/reference/production-checklist'
      }
    },
    'configuration.html': {
      route: '#/docs/instructions',
      anchors: {
        'before-you-configure': '#/docs/getting-started/installation',
        'starter-checklist': '#/docs/getting-started/installation~starter-checklist',
        'first-10-minutes': '#/docs/getting-started/installation~first-10-minutes',
        'what-to-configure-first': '#/docs/getting-started/installation~what-to-configure-first',
        'folder-layout': '#/docs/getting-started/installation~generated-files',
        'reload-vs-restart': '#/docs/getting-started/reload-and-restart',
        'runtime-guard': '#/docs/overview/current-state~runtime-guard',
        'config-yml': '#/docs/paper/config-yml',
        'case-types-yml': '#/docs/paper/case-types-yml',
        'discord-yml': '#/docs/paper/discord-yml',
        'storage-yml': '#/docs/paper/storage-yml',
        'messages-yml': '#/docs/paper/messages-yml',
        'workflow-rules': '#/docs/overview/workflow~workflow-rules',
        'evidence-visibility': '#/docs/overview/workflow~evidence-visibility',
        'dialog-ui-configuration': '#/docs/overview/workflow~inventory-first-dialog-input',
        'commands': '#/docs/reference/commands-and-permissions~commands',
        'permissions': '#/docs/reference/commands-and-permissions~permissions',
        'validation': '#/docs/reference/troubleshooting',
        'regenerating-defaults': '#/docs/getting-started/reload-and-restart~regenerating-defaults',
        'troubleshooting-quick-reference': '#/docs/reference/troubleshooting',
        'production-validation-checklist': '#/docs/reference/production-checklist',
        'quick-setup-examples': '#/docs/getting-started/installation~what-to-configure-first',
        'summary': '#/docs/overview/introduction'
      }
    },
    'docs.html': { route: '#/docs/instructions', anchors: null },
    'faq.html': { route: '#/docs/getting-started/faq', anchors: null },
    'support-policy.html': {
      route: '#/docs/reference/support-policy',
      anchors: {
        'release-channels': '#/docs/reference/support-policy~release-channels',
        'supporter-preview-builds': '#/docs/reference/support-policy~supporter-preview-builds',
        'critical-fix-policy': '#/docs/reference/support-policy~critical-fix-policy',
        'paid-memberships': '#/docs/reference/support-policy~paid-memberships',
        'discord-authentication': '#/docs/reference/support-policy~discord-authentication',
        'disclaimer': '#/docs/reference/support-policy~disclaimer'
      }
    }
  };

  /** Select the maintained wiki route for one legacy page bookmark. */
  function target(page, hash) {
    const entry = routes[page];
    if (!entry) return 'index.html#/docs/getting-started/installation';
    let anchor = '';
    try { anchor = decodeURIComponent(String(hash || '').replace(/^#/, '')); } catch (_) { /* Invalid bookmarks select the page root. */ }
    const route = entry.anchors ? (entry.anchors[anchor] || entry.route) : entry.route + (anchor ? '~' + encodeURIComponent(anchor) : '');
    return 'index.html' + route;
  }

  if (typeof module === 'object' && module.exports) module.exports = { target, routes };
  else if (root.document) root.location.replace(target(root.document.body.dataset.legacyPage, root.location.hash));
}(typeof window !== 'undefined' ? window : globalThis));
