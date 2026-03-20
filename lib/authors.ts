export interface AuthorData {
  authorid: string
  name: string
  subtitle: string
  bio: string
  ogImage: string
  socials?: Record<string, string>
}

export const authors: Record<string, AuthorData> = {
  ecosystem: {
    authorid: 'ecosystem',
    name: 'ecosystem.Ai',
    subtitle: 'In the moment, not in batch',
    bio: 'ecosystem.Ai is a platform that empowers you to harness the capabilities of cutting-edge AI.',
    ogImage: '/images/people/ecosystem.png',
    socials: {
      GitHub: 'https://github.com/ecogenetic',
      LinkedIn: 'https://www.linkedin.com/company/ecosystem.ai/',
      X: 'https://x.com/ecosystem_ai',
      Discord: 'https://discord.gg/8dNyCq4e',
      YouTube: 'https://www.youtube.com/@ecosystemai6786',
      email: 'mailto:amy@ecosystem.ai',
    },
  },
  jayvanzyl: {
    authorid: 'jayvanzyl',
    name: 'Jay',
    subtitle: 'CEO',
    bio: 'Jay is a computational social scientist and technologist with a passion for real-time interventions and complex predictive analytic.',
    ogImage: '/images/people/jayvanzyl.png',
    socials: {
      GitHub: 'https://github.com/ecogenetic',
      LinkedIn: 'https://www.linkedin.com/in/jayvanzyl/',
      email: 'mailto:jay@ecosystem.ai',
    },
  },
  eric: {
    authorid: 'eric',
    name: 'Eric',
    subtitle: 'Product Lead',
    bio: 'Applied Math and technologist with a passion for real-time interventions and complex predictive analytics. Eric is a computational social scientist and technologist with a passion for real-time interventions and complex predictive analytics.',
    ogImage: '/images/people/eric.png',
    socials: {
      GitHub: 'https://github.com/ecogenetic',
      LinkedIn: 'https://www.linkedin.com/company/ecosystem.ai/',
      email: 'mailto:eric@ecosystem.ai',
    },
  },
  francois: {
    authorid: 'francois',
    name: 'Francois',
    subtitle: 'Lead Developer',
    bio: 'Lead Developer.',
    ogImage: '/images/people/francois.png',
    socials: {
      GitHub: 'https://github.com/ecogenetic',
      LinkedIn: 'https://www.linkedin.com/company/ecosystem.ai/',
      email: 'mailto:francois@ecosystem.ai',
    },
  },
  jessica: {
    authorid: 'jessica',
    name: 'Jessica Nicole',
    subtitle: 'Behavioral Analyst',
    bio: 'Analyst, researcher, and writer. She is passionate about understanding human behavior and how it influences decision-making. She is currently pursuing a Ph.D. in Behavioral Economics.',
    ogImage: '/images/people/jessica.png',
    socials: {
      GitHub: 'https://github.com/jessica',
      LinkedIn: 'https://www.linkedin.com/in/jessicanicole/',
      email: 'mailto:jessica@ecosystem.ai',
    },
  },
  nicolaamon: {
    authorid: 'nicolaamon',
    name: 'Nicola Amon',
    subtitle: 'Writer',
    bio: 'Nicola writes about real-time AI, behavioral intelligence, and modern AI architectures.',
    ogImage: '/images/people/ecosystem.png',
  },
  ramsay: {
    authorid: 'ramsay',
    name: 'Ramsay Louw',
    subtitle: 'Data Scientist',
    bio: 'Data scientist and technology specialist with a passion for AI and machine learning.',
    ogImage: '/images/people/ramsay.png',
    socials: {
      GitHub: 'https://github.com/ramsaylouw',
      LinkedIn: 'https://www.linkedin.com/in/ramsaylouw/',
      email: 'mailto:ramsay@ecosystem.ai',
    },
  },
}

export function getAuthor(authorid: string): AuthorData | undefined {
  return authors[authorid]
}

export function getAllAuthors(): AuthorData[] {
  return Object.values(authors)
}
