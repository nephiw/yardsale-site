import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { LocationsComponent } from './locations/locations.component';
import { DetailComponent } from './locations/detail.component';
import { SignupLinkComponent } from './signup-link/signup-link.component';
import { HomePageComponent } from './home-page.component';
import { ToStringPipe } from './to-string/to-string.pipe';
import { SitesService } from './sites/sites.service';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  declarations: [
    HomePageComponent,
    LocationsComponent,
    DetailComponent,
    SignupLinkComponent,
    ToStringPipe
  ],
  providers: [SitesService],
  exports: [HomePageComponent]
})
export class HomePageModule { }
