import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ClientsModule } from './clients/clients.module';
import { HotelsModule } from './hotels/hotels.module';
import { RegionsModule } from './regions/regions.module';

import { MatDialog } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ClientsModule,
    RegionsModule,
    HotelsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
