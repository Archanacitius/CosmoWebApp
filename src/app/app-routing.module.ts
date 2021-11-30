import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminDashboardComponent } from './Component/admin/admin-dashboard/admin-dashboard.component';
import { AdminModule } from './Component/admin/admin.module';
import { HomeComponent } from './Component/home/home/home.component';
import { LoginComponent } from './Component/home/login/login.component';
import { NavMenuComponent } from './Component/home/nav-menu/nav-menu.component';
//import { NavMenuComponent } from './Component/nav-menu/nav-menu.component';
import { PhysicianComponent } from './Component/physician/physician.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '',
    component: NavMenuComponent,
    canActivate: [AuthGuard]    // ?

  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  {
    path: 'Physician',
    component: PhysicianComponent,
  },
  {
    // Need to keep it at last
    path: 'AdminDashboard',
    component: AdminDashboardComponent,
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
