import postcssJitProps from 'postcss-jit-props';
import postcssCustomMedia from 'postcss-custom-media';
import postcssGlobalData from '@csstools/postcss-global-data';
import OpenProps from 'open-props';

const config = {
  plugins: [
    postcssGlobalData({
      files: [
        'node_modules/open-props/media.min.css',
      ],
    }),
    postcssCustomMedia(),
    postcssJitProps(OpenProps),
  ]
}

export default config;
