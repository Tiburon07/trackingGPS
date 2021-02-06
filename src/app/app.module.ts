import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

import { AppComponent } from './app.component';
// App Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { ErrorComponent } from './error/error.component';
// Leaflet
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapManagerService } from './map/map-manager/map-manager-service';

//UMS
import { UsersComponent } from './ums/users/users.component';
import { UserService } from './ums/services/user.service';
import { UserComponent } from './ums/user/user.component';
import { UserDetailComponent } from './ums/user-detail/user-detail.component';
import { UserProfileComponent } from './ums/user-profile/user-profile.component';
import { LoginComponent } from './ums/login/login.component';
import { SignupComponent } from './ums/signup/signup.component';

// Dipendenze
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AgGridModule} from 'ag-grid-angular';
import {BtnCellRenderer} from './map/map-manager/btn-cell-renderer.component';
import {MapManagerComponent} from './map/map-manager/map-manager.component';

//Currency format
registerLocaleData(localeIt);


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    ErrorComponent,
    MapManagerComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    UserProfileComponent,
    LoginComponent,
    SignupComponent,
    BtnCellRenderer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 30000}),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    LeafletModule,
    AgGridModule.withComponents([BtnCellRenderer])
  ],
  providers: [MapManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
