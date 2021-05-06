const critical = require('critical');

critical.generate({
  inline: true,
  base: 'out/',
  src: 'index.html',
  target: 'desktop.html',
  width: 1920,
  height: 1000,
});

critical.generate({
  inline: false,
  base: 'out/',
  src: 'index.html',
  target: 'critical.css',
  width: 1920,
  height: 1000,
});

critical.generate({
  inline: true,
  base: 'out/',
  src: 'index.html',
  target: 'mobile.html',
  width: 400,
  height: 800,
});

critical.generate({
  inline: true,
  base: 'out/',
  src: 'index.html',
  target: 'responsive.html',
  dimensions: [
    {
      width: 1920,
      height: 1000,
    },
    {
      width: 400,
      height: 800,
    },
  ],
});

