module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'installation',
        'usage',
        'design-principles',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: [
        'components',
        'components/title',
        'components/legend',
        'components/annotation',
        'components/axes',
        'components/tooltips',
        'components/animation',
      ],
    },
    {
      type: 'category',
      label: 'Charts',
      collapsed: false,
      items: [
        'charts',
        'charts/bar',
        'charts/column',
        // 'charts/line',
        // 'charts/bubble',
        'charts/pie',
        'charts/donut',
        // 'charts/radar',
        // 'charts/polar',
        // 'charts/gauge',
      ],
    },
    {
      type: 'link',
      label: 'GitHub repo',
      href: 'https://github.com/ChartsCSS/charts.css',
    },
  ],
};
