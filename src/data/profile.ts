export const profile = {
  email: 'krutijasani5325@gmail.com',
  githubUrl: 'https://github.com/kruti138',
  githubLabel: 'github.com/kruti138',
  linkedinUrl: 'https://www.linkedin.com/in/kruti-jasani-9176a9311/',
  linkedinLabel: 'linkedin.com/in/kruti-jasani-9176a9311',
} as const;

export const profileLinks = {
  email: `mailto:${profile.email}`,
  github: profile.githubUrl,
  linkedin: profile.linkedinUrl,
} as const;
