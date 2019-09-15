import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmpAttendaneRptPage } from './emp-attendane-rpt.page';

const routes: Routes = [
  {
    path: '',
    component: EmpAttendaneRptPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmpAttendaneRptPage]
})
export class EmpAttendaneRptPageModule {}
