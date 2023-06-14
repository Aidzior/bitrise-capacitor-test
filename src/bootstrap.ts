import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootstrap } from '@angular-architects/module-federation-tools';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

bootstrap(AppModule, {
  production: environment.production,
  appType: 'shell',
  // appType: 'microfrontend'
}).then(() => {
  // Call the element loader after the platform has been bootstrapped
  defineCustomElements(window);
});
