module.exports = {
  title: 'ChartsCSS.com',
  tagline: 'New data visualization framework using pure CSS',
  url: 'https://ChartsCSS.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'ChartsCSS', // GitHub org/user name.
  projectName: 'chartscss.github.io', // GitHub repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'ChartsCSS.com',
      logo: {
        alt: 'ChartsCSS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'GitHub',
          position: 'right',
          className: 'header-github',
          href: 'https://github.com/ChartsCSS/charts.css'
        },
      ],
      hideOnScroll: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ChartsCSS/ChartsCSS.com/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
