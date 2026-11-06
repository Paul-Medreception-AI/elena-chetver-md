/** @type {import("next").NextConfig} */
// Written by the MedReception website builder (code, not a model). Redirects run
// BEFORE the filesystem, so no rule here may name a path the site serves; the builder
// checks every source against the final route set and every destination exists.
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // 2026-11-06 (Paul): Dr. Chetver runs her own site, so this domain stands aside and sends
      // every visitor there. Only the three SMS compliance pages stay served here, because her
      // one-page site has none and the practice's texting registration needs them. Temporary
      // (307), so the full site can come back by deleting these two rules. The whole build is
      // still in this repo.
      { source: '/', destination: 'https://elenachetvermd.carrd.co', permanent: false },
      { source: '/:path((?!privacy-sms|terms-sms|patient-form-sms|api/|_next/|images/|favicon|icon|apple-icon|robots|sitemap).*)', destination: 'https://elenachetvermd.carrd.co', permanent: false },
      { source: '/privacy', destination: '/privacy-sms', permanent: true },
      { source: '/privacy-policy', destination: '/privacy-sms', permanent: true },
      { source: '/terms', destination: '/terms-sms', permanent: true },
      { source: '/terms-of-service', destination: '/terms-sms', permanent: true },
      { source: '/sms-terms', destination: '/terms-sms', permanent: true },
    ];
  },
};
module.exports = nextConfig;
