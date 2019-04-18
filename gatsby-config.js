const gitHubOrg = `https://github.com/storybooks`;
const homepageUrl = `https://storybook.js.org`;
const npmApiBase = `https://api.npmjs.org/downloads/point/last-month`;
const docsUrl = `${homepageUrl}/docs`;

const siteMetadata = {
  title: 'Storybook',
  description: `Storybook is an open source tool for developing UI components in isolation for React, Vue, and Angular`,
  ogImage: '/images/social/open-graph.png',
  googleSiteVerification: '',
  latestVersion: 'v5.0',
  urls: {
    gitHubOrg,
    homepageUrl,
    docsUrl,
    npmApiBase,
    gitHub: {
      repo: `${gitHubOrg}/storybook`,
      frontpage: `${gitHubOrg}/frontpage`,
      issues: `${gitHubOrg}/storybook/issues`,
      releases: `${gitHubOrg}/storybook/releases`,
      contributors: `${gitHubOrg}/storybook/graphs/contributors`,
      brand: `${gitHubOrg}/press`,
    },

    npm: `https://www.npmjs.com/package/@storybook/react`,
    openCollective: `https://opencollective.com/storybook`,

    npmApi: {
      react: `${npmApiBase}/@storybook/react`,
      reactNative: `${npmApiBase}/@storybook/react-native`,
      vue: `${npmApiBase}/@storybook/vue`,
      angular: `${npmApiBase}/@storybook/angular`,
      ember: `${npmApiBase}/@storybook/ember`,
      html: `${npmApiBase}/@storybook/html`,
      svelte: `${npmApiBase}/@storybook/svelte`,
      mithril: `${npmApiBase}/@storybook/mithril`,
      riot: `${npmApiBase}/@storybook/riot`,
      polymer: `${npmApiBase}/@storybook/polymer`,
      preact: `${npmApiBase}/@storybook/preact`,
    },

    // Navigation
    home: homepageUrl,
    docs: {
      home: `${docsUrl}/basics/introduction/`,
      addonInstruction: `${docsUrl}/addons/writing-addons/`,
    },
    addons: `/addons/`,
    community: `/community/`,
    useCases: `/use-cases/`,
    support: `/support/`,
    team: `/team/`,

    // Social
    blog: `https://medium.com/storybookjs`,
    medium: `https://medium.com/storybookjs`,
    twitter: `https://twitter.com/storybookjs`,
    chat: `https://discord.gg/UUt2PJb`,
    youtube: `https://www.youtube.com/channel/UCr7Quur3eIyA_oe8FNYexfg`,

    // Brand
    brand: `${gitHubOrg}/brand`,
    designSystem: `https://storybooks-official.netlify.com`,
    badge: `${gitHubOrg}/brand/tree/master/badge`,
    presentation: `${gitHubOrg}/brand/tree/master/presentation`,
    video: `${gitHubOrg}/brand/tree/master/video`,

    // Framework docs
    framework: {
      react: `${docsUrl}/guides/guide-react/`,
      reactNative: `${docsUrl}/guides/guide-react-native/`,
      vue: `${docsUrl}/guides/guide-vue/`,
      angular: `${docsUrl}/guides/guide-angular/`,
      ember: `${docsUrl}/guides/guide-ember/`,
      html: `${docsUrl}/guides/guide-html/`,
      svelte: `${docsUrl}/guides/guide-svelte/`,
      mithril: `${docsUrl}/guides/guide-mithril/`,
      riot: `${docsUrl}/guides/guide-riot/`,
    },

    // Official addons
    officialAddons: {
      knobs: `${gitHubOrg}/storybook/tree/master/addons/knobs`,
      actions: `${gitHubOrg}/storybook/tree/master/addons/actions`,
      source: `${gitHubOrg}/storybook/tree/master/addons/storysource`,
      info: `${gitHubOrg}/storybook/tree/master/addons/info`,
      viewport: `${gitHubOrg}/storybook/tree/master/addons/viewport`,
      storyshots: `${gitHubOrg}/storybook/tree/master/addons/storyshots`,
      backgrounds: `${gitHubOrg}/storybook/tree/master/addons/backgrounds`,
      accessibility: `${gitHubOrg}/storybook/tree/master/addons/a11y`,
      console: `${gitHubOrg}/storybook-addon-console`,
      links: `${gitHubOrg}/storybook/tree/master/addons/links`,
    },
  },
};

siteMetadata.urls.navLinks = [
  { title: 'Docs', href: siteMetadata.urls.docs.home, isGatsby: false },
  { title: 'Addons', href: siteMetadata.urls.addons, isGatsby: true },
  { title: 'Community', href: siteMetadata.urls.community, isGatsby: true },
  { title: 'Use cases', href: siteMetadata.urls.useCases, isGatsby: true },
  { title: 'Support', href: siteMetadata.urls.support, isGatsby: true },
  { title: 'Team', href: siteMetadata.urls.team, isGatsby: true },
];

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Nunito Sans:400,700,900'],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-github-repo',
      options: {
        repoUrl: 'https://github.com/storybooks/storybook',
      },
    },
    {
      resolve: 'gatsby-plugin-segment',
      options: {
        writeKey: 'AvvBObOmHaEMqfub8JJUXq5umjsuaqS8',
      },
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `storybookjs`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
