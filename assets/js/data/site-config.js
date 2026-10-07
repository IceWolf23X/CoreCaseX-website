/* CoreCaseX public identity, release source, assets and product palette. */
window.COREX_SITE = {
  schemaVersion: 1,
  brand: {
    family: 'CoreX',
    product: 'CoreCaseX',
    author: 'IceWolf23X',
    familyLabel: 'A CoreX plugin',
    tagline: 'Every case stays visible, owned and traceable.',
    language: 'en',
    logo: 'assets/img/corecasex-logo.png',
    favicon: 'assets/img/corecasex-logo.png',
    description: 'CoreCaseX gives Paper servers guided player cases, inventory-first staff workflows, SQLite history and optional Discord webhook notifications.'
  },

  links: {
    download: 'https://modrinth.com/plugin/corecasex',
    modrinth: 'https://modrinth.com/plugin/corecasex',
    github: 'https://github.com/IceWolf23X/CoreCaseX-issues',
    issues: 'https://github.com/IceWolf23X/CoreCaseX-issues/issues',
    official: 'https://wiki-corecasex.icewolf23x.dev/'
  },

  releases: {
    provider: 'github',
    owner: 'IceWolf23X',
    repository: 'CoreCaseX-website',
    cacheMinutes: 15,
    requestTimeoutMs: 10000,
    maxPages: 10,
    assetNames: {
      paper: ['CoreCaseX-*.jar'],
      velocity: []
    }
  },

  assets: {
    heroPreview: {
      images: [
        { src: 'assets/img/corecasex-logo.png', alt: 'CoreCaseX plugin logo' }
      ],
      autoplay: false,
      intervalMs: 5000,
      transitionMs: 240,
      pauseOnHover: true,
      objectFit: 'contain',
      src: '',
      alt: 'CoreCaseX plugin logo'
    }
  },

  theme: {
    default: 'light',
    storageKey: 'corex.theme',
    light: {
      accent: '#b45309',
      accentHover: '#92400e',
      accentSoft: '#fff4e6',
      accentLine: '#fed7aa',
      onAccent: '#ffffff',
      page: '#fcfcfb',
      surface: '#ffffff',
      surfaceAlt: '#f6f4f1',
      surfaceHover: '#efebe6',
      ink: '#29241f',
      muted: '#6b625a',
      quiet: '#7a6f65',
      line: '#e9e3dd',
      lineStrong: '#d7cec5'
    },
    dark: {
      accent: '#fdba74',
      accentHover: '#fed7aa',
      accentSoft: '#32251c',
      accentLine: '#704220',
      onAccent: '#2a1608',
      page: '#181716',
      surface: '#201e1c',
      surfaceAlt: '#272421',
      surfaceHover: '#302b27',
      ink: '#f2eeea',
      muted: '#b6aaa0',
      quiet: '#95887d',
      line: '#37322e',
      lineStrong: '#4b433c'
    }
  }
};
