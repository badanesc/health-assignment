const config = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: [
        'node_modules/open-props/media.min.css',
      ],
    },
    'postcss-custom-media': {},
  },
};

export default config;
