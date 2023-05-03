import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'edu.mtech.homelock',
  appName: 'Homelock',
  server: {
    url: 'http://localhost:8100/',
  },
  webDir: 'www',
  bundledWebRuntime: false
};

export default config;
