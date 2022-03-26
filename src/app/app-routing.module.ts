import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dmw',
    loadChildren: () => import('./dmw/dmw.module').then( m => m.DmwPageModule)
  },
  {
    path: 'bcn',
    loadChildren: () => import('./bcn/bcn.module').then( m => m.BcnPageModule)
  },
  {
    path: 'qpc',
    loadChildren: () => import('./qpc/qpc.module').then( m => m.QpcPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
