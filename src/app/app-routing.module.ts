import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'tempo',
    loadChildren: () => import('./tab1/tempo/tempo.module').then(m => m.TempoPageModule),
  },
  {
    path: 'users-detail',
    loadChildren: () => import('./tab3/users-detail/users-detail.module').then(m => m.UsersDetailPageModule),
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}