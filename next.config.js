const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
  distDir: 'build',
  experimental: {
    // This is experimental but can
    // be enabled to allow parallel threads
    // with nextjs automatic static generation
    workerThreads: false,
    cpus: 4
  }
};

module.exports = withNextIntl(config);