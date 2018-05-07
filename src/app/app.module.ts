import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { SitesService } from './sites.service';
import { ToStringPipe } from './to-string.pipe';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({ apiKey: environment.mapsKey })
  ],
  declarations: [
    AppComponent,
    LocationsComponent,
    ToStringPipe
  ],
  providers: [SitesService],
  bootstrap: [AppComponent]
})
export class AppModule { }