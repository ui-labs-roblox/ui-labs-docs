// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

const config = {
   title: 'UI Labs',
   tagline: 'A storybook visualizer for Roblox',
   favicon: 'img/uilabs.ico',

   // Set the production url of your site here
   url: 'https://ui-labs-roblox.github.io/',
   // Set the /<baseUrl>/ pathname under which your site is served
   // For GitHub pages deployment, it is often '/<projectName>/'
   baseUrl: '/ui-labs-docs',

   // GitHub pages deployment config.
   // If you aren't using GitHub pages, you don't need these.
   organizationName: 'ui-labs-roblox', // Usually your GitHub org/user name.
   projectName: 'ui-labs-docs', // Usually your repo name.

   onBrokenLinks: 'throw',
   onBrokenMarkdownLinks: 'warn',

   // Even if you don't use internalization, you can use this field to set useful
   // metadata like html lang. For example, if your site is Chinese, you may want
   // to replace "en" with "zh-Hans".
   i18n: {
      defaultLocale: 'en',
      locales: ['en'],
   },

   presets: [
      [
         'classic',
         /** @type {import('@docusaurus/preset-classic').Options} */
         ({
            docs: {
               sidebarPath: require.resolve('./sidebars.js'),
               // Please change this to your repo.
               // Remove this to remove the "edit this page" links.
               editUrl:
                  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            },
            theme: {
               customCss: require.resolve('./src/css/custom.css'),
            },
         }),
      ],
   ],

   themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
         // Replace with your project's social card
         image: 'img/docusaurus-social-card.jpg',
         navbar: {
            title: 'UI Labs',
            logo: {
               alt: 'UI',
               src: 'img/uilabs.ico',
            },
            items: [
               {
                  type: 'docSidebar',
                  sidebarId: 'tutorialSidebar',
                  position: 'left',
                  label: 'Docs',
               },
               {
                  href: 'https://github.com/facebook/docusaurus',
                  label: 'Plugin',
                  position: 'left',
               }
            ],
         },
         footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} ui-labs. Built with Docusaurus.`,
         },
         prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['lua'],
         },
      }),
};

module.exports = config;
