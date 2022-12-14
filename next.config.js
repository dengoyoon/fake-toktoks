/** @type {import('next').NextConfig} */
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const SentryOptions = {
  sentry: {
    hideSourceMaps: true,
  },
};

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = nextConfig;

module.exports = withSentryConfig(SentryOptions, SentryWebpackPluginOptions);
