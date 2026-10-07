/* CoreCaseX landing copy; shared renderers read this file without product HTML edits. */
window.COREX_LANDING = {
  order: ['hero', 'compatibility', 'features', 'setup', 'docsPromo', 'faq', 'finalCta'],

  header: {
    nav: [
      { label: 'Features', href: '#/features', nav: 'features' },
      { label: 'Setup', href: '#/setup', nav: 'setup' },
      { label: 'Documentation', href: '#/docs/overview', nav: 'docs', docsLink: true },
      { label: 'FAQ', href: '#/faq', nav: 'faq' },
      { label: 'Releases', href: '#/releases', nav: 'releases' }
    ]
  },

  hero: {
    eyebrow: 'Structured support for Paper servers',
    title: [
      { text: 'Player issues,' },
      { text: 'one accountable workflow.', accent: true }
    ],
    description: 'Guide players through clear submissions, then give staff one inventory-first board for ownership, evidence, replies and final outcomes.',
    actions: [
      { label: 'Download on Modrinth', linkKey: 'download', icon: 'arrow', style: 'primary', external: true },
      { label: 'Explore the docs', href: '#/docs/overview', icon: 'book', docsLink: true }
    ],
    platforms: ['Paper 1.21.11+', 'Java 21', 'Version 2026.1.1'],
    preview: {
      assetKey: 'heroPreview',
      ariaLabel: 'CoreCaseX plugin logo',
      topLeft: 'CORECASEX / PAPER',
      placeholderLabel: 'PLUGIN PREVIEW',
      placeholderTitle: 'Cases with context.',
      placeholderText: 'Player reports, staff ownership and history in one place.',
      dimensions: 'PAPER / 2026.1.1',
      captionLeft: 'Inventory-first case management.',
      captionRight: 'Paper + SQLite',
      tag: 'Support that stays traceable.'
    }
  },

  compatibility: {
    labelLines: ['BUILT FOR', 'MODERN PAPER'],
    items: [
      { label: 'Paper 1.21.11+', icon: 'server' },
      { label: 'Java 21', icon: 'code' },
      { label: 'Inventory UI', icon: 'layers' },
      { label: 'Paper Dialog input', icon: 'message' },
      { label: 'SQLite', icon: 'database' },
      { label: 'Discord webhooks', icon: 'discord' }
    ]
  },

  features: {
    id: 'features',
    number: '01 /',
    eyebrow: 'One case system',
    title: ['From the first report', 'to the final outcome.'],
    description: 'Every action adds context to the same case instead of scattering support across chat, screenshots and staff messages.',
    cards: [
      {
        icon: 'file',
        title: 'Five guided case types.',
        text: 'Support, player reports, bugs, lost items or death issues, and grief or theft each collect the context staff need.',
        link: { label: 'See the case types', href: '#/docs/overview/features~case-types' }
      },
      {
        icon: 'layers',
        title: 'Inventory-first navigation.',
        text: 'Players and staff browse menus, lists, filters and actions in inventory GUIs. Paper Dialogs handle typed input and compact forms.',
        link: { label: 'Understand the interface', href: '#/docs/overview/workflow~inventory-first-dialog-input' }
      },
      {
        icon: 'shield',
        title: 'Granular staff responsibility.',
        text: 'Separate permissions for viewing, claiming, assigning, replying, notes, workflow changes, teleporting and sensitive evidence.',
        link: { label: 'Review permissions', href: '#/docs/reference/commands-and-permissions~permissions' }
      },
      {
        icon: 'message',
        title: 'Conversation with state.',
        text: 'Staff replies, information requests and reporter replies move the case through waiting states while preserving the timeline.',
        link: { label: 'Follow the workflow', href: '#/docs/overview/workflow' }
      },
      {
        icon: 'database',
        title: 'Local SQLite history.',
        text: 'Cases, evidence, replies, notes, resolutions and timeline entries remain together without a separate database service.',
        link: { label: 'Operate storage safely', href: '#/docs/reference/storage-and-backup' }
      },
      {
        icon: 'discord',
        title: 'Optional Discord mirrors.',
        text: 'Route best-effort webhook notifications by priority, case type or fallback without making Discord part of the case transaction.',
        link: { label: 'Configure webhooks', href: '#/docs/paper/discord-yml' }
      }
    ],
    bottom: {
      strong: 'Visible work. Clear ownership. Complete history.',
      text: 'A focused moderation and support workflow for one Paper server.',
      link: { label: 'Open the complete feature overview', href: '#/docs/overview/features' }
    }
  },

  setup: {
    id: 'setup',
    number: '02 /',
    eyebrow: 'A focused Paper deployment',
    title: ['Install one JAR.', 'Keep the full case history local.'],
    tabAriaLabel: 'CoreCaseX deployment',
    modes: [
      {
        id: 'paper',
        tabLabel: 'Paper server',
        tabIcon: 'server',
        title: 'Paper owns the workflow and storage.',
        text: 'CoreCaseX is a standalone Paper plugin. It does not include a proxy module or external database backend.',
        steps: [
          'Install the CoreCaseX JAR on Paper 1.21.11+ with Java 21.',
          'Start once to generate five documented YAML files and SQLite storage.',
          'Test player creation and staff closure before enabling Discord webhooks.'
        ],
        link: { label: 'Follow the installation guide', href: '#/docs/getting-started/installation' },
        topology: {
          labelLeft: 'DEPLOYMENT / PAPER',
          labelRight: 'SINGLE SERVER',
          nodes: [
            { icon: 'users', label: 'Players and staff' },
            { icon: 'server', label: 'Paper', small: 'CoreCaseX', primary: true },
            { icon: 'database', label: 'Local SQLite' }
          ],
          note: 'Discord webhooks are optional output. Case state remains local and authoritative.'
        }
      }
    ]
  },

  docsPromo: {
    eyebrow: 'Every workflow, documented.',
    title: ['Start with the player experience.', 'Then configure the exact policy.'],
    description: 'The wiki separates product behavior, installation, every public YAML key, commands, permissions, storage safety and troubleshooting.',
    cards: [
      { icon: 'layers', title: 'Feature overview', href: '#/docs/overview', text: 'Case types, inventory navigation, evidence, staff actions and conversation state.' },
      { icon: 'code', title: 'Paper configuration', href: '#/docs/paper/config-yml', text: 'Five public defaults with exact semantics, limits, fallbacks and restart boundaries.' }
    ]
  },

  faq: {
    id: 'faq',
    number: '03 /',
    eyebrow: 'Before you install',
    title: 'The practical questions.',
    description: 'Answers based on the current 2026.1.1 source and bundled defaults.',
    introLink: { label: 'Read the full FAQ', href: '#/docs/getting-started/faq' },
    items: [
      { question: 'Does CoreCaseX need MySQL or a proxy?', answer: 'No. Version 2026.1.1 is a standalone Paper plugin with local SQLite storage. It has no Velocity module or MySQL/MariaDB backend.', link: { label: 'Current scope', href: '#/docs/overview/current-state' } },
      { question: 'Does /case open a Dialog?', answer: 'No. /case opens the inventory main menu. Inventory GUIs handle navigation and choices; Paper Dialogs are used when a player or staff member must type text.', link: { label: 'Interface workflow', href: '#/docs/overview/workflow~inventory-first-dialog-input' } },
      { question: 'Can staff roles be separated?', answer: 'Yes. Staff capabilities have individual permissions, including view, claim, assign, reply, note, status, archive, teleport and two evidence visibility levels.', link: { label: 'Permission reference', href: '#/docs/reference/commands-and-permissions~permissions' } },
      { question: 'Can configuration be reloaded?', answer: 'Most YAML changes can use /case reload. Changing the SQLite path or replacing the JAR requires a restart because reload does not reopen the database.', link: { label: 'Reload boundaries', href: '#/docs/getting-started/reload-and-restart' } },
      { question: 'Are Discord notifications required?', answer: 'No. Webhooks are disabled by default and best-effort. Failed webhook delivery is logged without rolling back the case action.', link: { label: 'Discord configuration', href: '#/docs/paper/discord-yml' } }
    ]
  },

  finalCta: {
    title: ['Make support visible.', 'Keep every decision attached.'],
    description: 'Download the current CoreCaseX build, validate it on Paper, then tune the workflow for your staff team.',
    actions: [
      { label: 'Download on Modrinth', linkKey: 'download', icon: 'arrow', style: 'primary', external: true },
      { label: 'Read the setup guide', href: '#/docs/getting-started/installation' }
    ]
  },

  footer: {
    caption: 'Every case stays visible, owned and traceable.',
    nav: [
      { label: 'Overview', href: '#/docs/overview' },
      { label: 'Setup', href: '#/docs/getting-started/installation' },
      { label: 'Configuration', href: '#/docs/paper/config-yml' },
      { label: 'Issues', linkKey: 'issues', external: true },
      { label: 'Releases', href: '#/releases' },
      { label: 'Modrinth', linkKey: 'modrinth', external: true }
    ],
    copyright: '© 2026 CoreCaseX · A CoreX plugin by IceWolf23X.',
    scopeLink: { label: 'Documentation scope', href: '#/docs/reference/source-notes' }
  }
};
