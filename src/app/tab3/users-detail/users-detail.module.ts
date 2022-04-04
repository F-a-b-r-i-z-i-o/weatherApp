import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsersDetailPageRoutingModule } from './users-detail-routing.module';

import { UsersDetailPage } from './users-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersDetailPageRoutingModule
  ],
  declarations: [UsersDetailPage]
})
export class UsersDetailPageModule {}