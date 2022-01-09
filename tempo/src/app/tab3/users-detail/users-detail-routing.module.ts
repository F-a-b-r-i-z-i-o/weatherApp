import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersDetailPage } from './users-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UsersDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersDetailPageRoutingModule {}