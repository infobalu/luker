import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserdetilviewPage } from './userdetilview.page';

const routes: Routes = [
  {
    path: '',
    component: UserdetilviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserdetilviewPage],
     entryComponents: [
      UserdetilviewPage
     ]
})
export class UserdetilviewPageModule {}
