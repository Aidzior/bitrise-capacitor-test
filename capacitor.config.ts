import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.klawiatura.app',
  appName: 'Klawiatura',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
