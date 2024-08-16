module.exports = {
    env: {
      customKey: 'my-value',
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'a.storyblok.com',
          port: '',
          pathname: '/f/**',
        },
      ],
    },
  }