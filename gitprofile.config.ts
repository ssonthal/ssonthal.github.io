// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ssonthal', 
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], 
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Shubham Sonthalia',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ssonthal',
    twitter: 'ssonthal',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '22999094/ssonthal', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.ssonthal.github.io',
    phone: '',
    email: 'ishubham.sonthalia@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'C++', 
    'Rust',
    'PostGreSql',
    'Git',
    'AWS', 
    'Docker'
  ],
  experiences: [
    {
      company: 'Qualcomm',
      position: 'Engineer',
      from: 'June 2024',
      to: 'Present',
      companyLink: 'https://www.qualcomm.com/',
    },
    {
      company: 'GEP Global Pvt Ltd',
      position: 'Software Engineer',
      from: 'June 2022',
      to: 'June 2024',
      companyLink: 'https://www.gep.com/',
    },
    {
      company: 'Nethermind',
      position: 'Blockchain Developer Intern',
      from: 'April 2022',
      to: 'June 2022',
      companyLink: 'https://www.nethermind.io/',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'IIIT Delhi',
      degree: 'B.Tech',
      from: '2018',
      to: '2022',
    }
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'shubhamsonthalia', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
