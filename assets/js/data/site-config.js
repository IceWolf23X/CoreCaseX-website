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
      surfaceAlt: '#f5f5f3',
      surfaceHover: '#eeedeb',
      ink: '#24232a',
      muted: '#65636f',
      quiet: '#726d7a',
      line: '#e7e5e9',
      lineStrong: '#d4d1da'
    },
    dark: {
      accent: '#fdba74',
      accentHover: '#fed7aa',
      accentSoft: '#32251c',
      accentLine: '#704220',
      onAccent: '#2a1608',
      page: '#17171a',
      surface: '#1d1d21',
      surfaceAlt: '#232327',
      surfaceHover: '#2b2a30',
      ink: '#eeedf1',
      muted: '#aaa7b3',
      quiet: '#8c8797',
      line: '#313037',
      lineStrong: '#45424e'
    }
  }
};
