const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  customDomain: 'https://googleisbad.wuemeli.com',
  scriptName: 'thinking',
})

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
});
