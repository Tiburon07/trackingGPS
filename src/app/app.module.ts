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
