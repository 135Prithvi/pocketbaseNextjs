/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      images: {
        domains: ['127.0.0.1','app.requestly.io',"pocketbase-docker-production-acb9.up.railway.app"],
      },
}

module.exports = nextConfig
