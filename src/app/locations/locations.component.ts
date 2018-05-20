import {
  Component,
  ViewChildren,
  QueryList,
  OnDestroy,
  ViewChild,
  HostListener
} from '@angular/core';
import { AgmInfoWindow, AgmMarker, AgmMap } from '@agm/core';
import { SitesService, Site } from '../sites.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bc-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnDestroy {
  public lat = 39.891394;
  public lng = -104.878966;
  public zoom = 16;

  public sites$: Observable<Site[]> = this.siteService.getAllSites();
  public site: Site;
  public previousWindow: AgmInfoWindow;

  @ViewChild(AgmMap) public map: AgmMap;

  constructor(private siteService: SitesService) {}

  public markerClicked(infoWindow: AgmInfoWindow, site: Site): void {
    if (this.previousWindow) {
      this.previousWindow.close();
    }
    this.previousWindow = infoWindow;
    this.site = site;
  }

  public ngOnDestroy(): void {
    this.previousWindow = null;
  }

  public onClose(site): void {
    if (this.site === site) {
      this.site = null;
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.map.triggerResize().then(() => {
      // this.map._mapsWrapper.setCenter({ 
      //   lat: this.lat,
      //   lng: this.lng
      // });
    });
  }
}
