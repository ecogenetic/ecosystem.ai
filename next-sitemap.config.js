/* eslint-disable no-undef */

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://developer.ecosystem.ai',
  generateRobotsTxt: true,
  changefreq: 'daily',
  latex: true,
  exclude: ['*/_meta'],
  additionalPaths: async () => [
    {
      loc: '/',
      priority: 1,
      changefreq: 'daily',
      lastmod: new Date().toISOString(),
    },
  ],
}
