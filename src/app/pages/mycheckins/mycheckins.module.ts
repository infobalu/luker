import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MycheckinsPage } from './mycheckins.page';

const routes: Routes = [
  {
    path: '',
    component: MycheckinsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MycheckinsPage]
})
export class MycheckinsPageModule {}
