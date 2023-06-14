import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { startsWith, WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
        /*component: WebComponentWrapper,
        data: {
          type: 'module',
          remoteEntry: 'http://localhost:4173/assets/remoteEntry.js',
          remoteName: 'remote-name',
          exposedModule: './HelloWorld',
          elementName: 'hello-world',
        } as WebComponentWrapperOptions,*/
      },
     /* {
        path: 'tab3',
        component: WebComponentWrapper,
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        data: {
          type: 'module',
          remoteName: 'MyWebComponent',
          remoteEntry: ' http://localhost:3000/remoteEntry.js',
          exposedModule: './web-components',
          elementName: 'my-custom-web-component',
        } as WebComponentWrapperOptions,
      },*/
      {
        path: 'app',
        component: WebComponentWrapper,
        data: {
          type: 'module',
          remoteName: 'app',
          remoteEntry: 'http://127.0.0.1:8080/remoteEntry.js',
          exposedModule: './web-components',
          elementName: 'my-custom-web-component',
        } as WebComponentWrapperOptions,
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
