export const site = {
  name: 'Marco Sanchioni',
  url: 'https://www.marcosanchioni.com',
  email: 'marco.sanchioni@sophiauniversity.org',
  jobTitle: 'Associate Professor of Philosophy of Science',
  affiliation: 'Sophia University Institute',
  affiliationUrl: 'https://www.sophiauniversity.org',
  defaultDescription:
    'Marco Sanchioni — Associate Professor of Philosophy of Science at the Sophia University Institute. Foundations and philosophy of physics: quantum gravity, black holes, relational quantum mechanics, spacetime.',
  orcid: 'https://orcid.org/0000-0002-7846-3633',
  scholar: 'https://scholar.google.com/citations?user=_VBSuuAAAAAJ',
  philpeople: 'https://philpeople.org/profiles/marco-sanchioni',
  linkedin: 'https://it.linkedin.com/in/marco-sanchioni-8b39a45b',
  twitter: 'https://twitter.com/sankio23',
  instagram: 'https://www.instagram.com/sanchionimarco/',
  facebook: 'https://www.facebook.com/marco.sanchioni2/',
  cv: '/assets/cv-marco-sanchioni.pdf',
  portrait: '/assets/portrait.jpg',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  {
    href: '/publications',
    label: 'Publications',
    children: [
      { href: '/publications#articles', label: 'Articles' },
      { href: '/publications#books', label: 'Books' },
    ],
  },
  { href: '/talks', label: 'Talks' },
  { href: '/teaching', label: 'Teaching' },
  { href: '/outreach', label: 'Outreach' },
  { href: '/blog', label: 'Blog' },
];
