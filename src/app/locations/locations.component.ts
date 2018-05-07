import {
  Component,
  ViewChildren,
  QueryList,
  OnDestroy
} from '@angular/core';
import { AgmInfoWindow, AgmMarker } from '@agm/core';
import { SitesService, Site } from '../sites.service';

@Component({
  selector: 'bc-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnDestroy {
  public lat = 39.891394;
  public lng = -104.878966;
  public zoom = 16;

  public sites: Site[] = this.siteService.getAllSites();
  public previousWindow: AgmInfoWindow;

  constructor(private siteService: SitesService) {}

  public markerClicked(infoWindow: AgmInfoWindow): void {
    if (this.previousWindow) {
      this.previousWindow.close();
    }
    this.previousWindow = infoWindow;
  }

  public ngOnDestroy(): void {
    this.previousWindow = null;
  }
}
