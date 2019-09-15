import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
  { path: 'list', loadChildren: './pages/list/list.module#ListPageModule'},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'},
  { path: 'add-employee', loadChildren: './pages/add-employee/add-employee.module#AddEmployeePageModule' },
  { path: 'create-check-in/:checkInFor', loadChildren: './pages/create-check-in/create-check-in.module#CreateCheckInPageModule' },
  { path: 'create-check-out/:checkInFor', loadChildren: './pages/create-check-out/create-check-out.module#CreateCheckOutPageModule' },
  { path: 'markattendance', loadChildren: './pages/markattendance/markattendance.module#MarkattendancePageModule' },
  { path: 'clenttype', loadChildren: './pages/clenttype/clenttype.module#ClenttypePageModule' },
  { path: 'mycheckins', loadChildren: './pages/mycheckins/mycheckins.module#MycheckinsPageModule' },
  { path: 'viewcheckin', loadChildren: './pages/viewcheckin/viewcheckin.module#ViewcheckinPageModule' },
  { path: 'viewemployees', loadChildren: './pages/viewemployees/viewemployees.module#ViewemployeesPageModule' },
  { path: 'homee', loadChildren: './pages/homee/homee.module#HomeePageModule' },
  { path: 'profileadmin', loadChildren: './pages/profileadmin/profileadmin.module#ProfileadminPageModule' },
  { path: 'empallcheckin', loadChildren: './pages/empallcheckin/empallcheckin.module#EmpallcheckinPageModule' },
  { path: 'emp-attendane-rpt', loadChildren: './pages/emp-attendane-rpt/emp-attendane-rpt.module#EmpAttendaneRptPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
