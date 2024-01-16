export const METADATA = {
  creator: 'erzagarbza',
  description:
    'Personal website, portfolio, fullstack website developer',
  keyword:
    'erzagar, Erzagar, Erzagar BZA, programming tips, belajar javascript, belajar typescript',
  authors: {
    name: 'Erzagar BZA',
    url: process.env.DOMAIN,
  },
  openGraph: {
    url: process.env.DOMAIN,
    siteName: 'erzagarbza',
    locale: 'id-ID',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'favicon',
      url: '/favicon.ico',
    },
  },
  exTitle: '| erzagarbza',
  profile: 'https://avatars.githubusercontent.com/u/44162954?v=4',
  githubUsername: process.env.GITHUB_USERNAME,
  githubToken: process.env.GITHUB_TOKEN,
};