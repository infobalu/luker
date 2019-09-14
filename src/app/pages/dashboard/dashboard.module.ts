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
      { path: 'empallcheckin', loadChildren: '../empallcheckin/empallcheckin.module#EmpallcheckinPageModule' }
    ]

  },
  {
    path:'',
    redirectTo:'../homee/homee',
    pathMatch:'full'
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
