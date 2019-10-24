import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckindetilviewPage } from './checkindetilview.page';

const routes: Routes = [
  {
    path: '',
    component: CheckindetilviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckindetilviewPage]
})
export class CheckindetilviewPageModule {}
