module.exports = {
  siteTitle: 'João Duarte',
  siteDescription:
    'Polyvalent and practical Software Developer and Game Programmer based in Lisbon, PT with experience building and designing applications and videogames.',
  siteKeywords:
    'João Duarte, João, Duarte, JoaoAVDuarte, Programmer, Software Developer, Game Programmer, Game developer, unity, unreal, web developer, javascript, portugal',
  siteUrl: 'https://jvd.netlify.com',
  siteLanguage: 'en_US',
  image: '',
  name: 'João Duarte',
  location: 'Lisbon, Portugal',
  email: 'jvd.k@aleeas.com',
  github: 'https://github.com/joavd',
  linkedin: 'https://www.linkedin.com/in/joavd/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/joavd',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/joavd/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#1d7ffc',
  navyColor: '#1d7ffc',
  darkNavyColor: '#ffffff',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
