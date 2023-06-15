import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.klawiatura.app',
  appName: 'Klawiatura App',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
