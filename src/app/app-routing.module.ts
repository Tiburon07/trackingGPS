import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MapManagerComponent} from './map/map-manager/map-manager.component';
import {ErrorComponent} from './error/error.component';

//UMS
import { LoginComponent } from './ums/login/login.component';
import { SignupComponent } from './ums/signup/signup.component';
import { UserDetailComponent } from './ums/user-detail/user-detail.component';
import { UserProfileComponent } from './ums/user-profile/user-profile.component';
import { UsersComponent } from './ums/users/users.component';
import { RouteGuardUmsService } from './ums/route-guard-ums.service';

const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'map', component: MapManagerComponent},

  //UMS
  { path: 'login/ums', component: LoginComponent },
  { path: 'signup/ums', component: SignupComponent },
  { path: 'ums', component: UsersComponent, canActivate: [RouteGuardUmsService]},

  // Rotta 404
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
