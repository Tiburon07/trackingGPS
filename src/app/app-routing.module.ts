import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MapManagerComponent} from './map/map-manager/map-manager.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [

  { path: '', component: DashboardComponent },
  { path: 'map', component: MapManagerComponent},

  // Rotta 404
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
