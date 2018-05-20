import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { SitesService } from './sites.service';
import { ToStringPipe } from './to-string.pipe';
import { DetailComponent } from './locations/detail.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({ apiKey: environment.mapsKey }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [
    AppComponent,
    LocationsComponent,
    ToStringPipe,
    DetailComponent
  ],
  providers: [SitesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
