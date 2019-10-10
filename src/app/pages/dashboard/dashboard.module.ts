import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children:[
      { path: 'viewemployees', loadChildren: '../viewemployees/viewemployees.module#ViewemployeesPageModule' },
      { path: 'homee', loadChildren: '../homee/homee.module#HomeePageModule' },
      { path: 'profileadmin', loadChildren: '../profileadmin/profileadmin.module#ProfileadminPageModule' },
      { path: 'empallcheckin', loadChildren: '../empallcheckin/empallcheckin.module#EmpallcheckinPageModule' },
      { path: 'emp-attendane-rpt', loadChildren: '../emp-attendane-rpt/emp-attendane-rpt.module#EmpAttendaneRptPageModule' },
      { path: 'clenttype', loadChildren: '../clenttype/clenttype.module#ClenttypePageModule' },
      { path: 'mycheckins', loadChildren: '../mycheckins/mycheckins.module#MycheckinsPageModule' },
      { path: '', loadChildren: '../homee/homee.module#HomeePageModule' } 
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
