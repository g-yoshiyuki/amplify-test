/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
  },
}

export default nextConfig
