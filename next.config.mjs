import nextra from 'nextra'
import NextBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nonPermanentRedirects = [
  ['/discord', 'https://discord.ecosystem.ai'],
  ['/demo', 'https://demo.ecosystem.cfd'],
  ['/issue', 'https://github.com/ecosystemai/developer/issues/new/choose'],
  ['/new-issue', 'https://github.com/ecosystemai/developer/issues/new/choose'],
  ['/issues', 'https://github.com/ecosystemai/developer/issues'],
  ['/gh-support', 'https://github.com/ecosystemai/developer/discussions/categories/support'],
  ['/gh-discussions', 'https://github.com/ecosystemai/developer/discussions'],
  ['/roadmap', '/docs/roadmap'],
  ...[].map((path) => [path, path + '/overview']),
]

const permanentRedirects = []

const withNextra = nextra({
  latex: {
    renderer: 'mathjax'
  },
  defaultShowCopyCode: true,
})

export default withBundleAnalyzer(
  withNextra({
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'static.developer.ai',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'github.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    headers() {
      const cspHeader = `
        default-src 'self' https: wss:;
        script-src 'self' 'unsafe-eval' 'unsafe-inline' https:;
        style-src 'self' 'unsafe-inline' https:;
        img-src 'self' https: blob: data:;
        media-src 'self' https: blob: data:;
        font-src 'self' https:;
        frame-src 'self' https:;
        worker-src 'self' blob:;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        upgrade-insecure-requests;
        block-all-mixed-content;
      `
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'x-frame-options', value: 'SAMEORIGIN' },
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            { key: 'Permissions-Policy', value: 'autoplay=*, fullscreen=*, microphone=*' },
          ],
        },
        {
          source: '/:path((?!api).*)*',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: cspHeader.replaceAll('\n', ''),
            },
          ],
        },
      ]
    },
    redirects: async () => [
      ...nonPermanentRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: false,
      })),
      ...permanentRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: false,
      })),
    ],
    transpilePackages: ['react-tweet', 'react-syntax-highlighter', 'geist'],
    serverExternalPackages: ['mongoose'],
  })
)
