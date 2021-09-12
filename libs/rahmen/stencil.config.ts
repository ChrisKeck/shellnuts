import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'rahmen',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/rahmen/dist',
    },
    {
      type: 'www',
      dir: '../../dist/libs/rahmen/www',
      serviceWorker: null, // disable service workers
    },
  ],
  devServer:{
    port:3334,
    openBrowser:false
  }
};
