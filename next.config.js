


module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thrangra.sirv.com',
        pathname: '**',
      },
    ],
  }
}