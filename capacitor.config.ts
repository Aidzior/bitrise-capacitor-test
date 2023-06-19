import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ay.capacitortest.app',
  appName: 'capacitortest',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
