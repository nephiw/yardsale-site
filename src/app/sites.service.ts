import {
  Injectable
} from '@angular/core';

@Injectable()
export class SitesService {

  constructor() {}

  public getAllSites(): Site[] {
    return [{
      address: 'Belle Creek Family Center',
        lat: 39.891895,
        lng: -104.878639
      },
      {
        address: '9288 E. 109th Ave',
        lat: 39.895018,
        lng: -104.876042
      },
      {
        address: '9271 E. 107th Pl',
        lat: 39.893439,
        lng: -104.878505
      },
      {
        address: '10692 Dayton Way',
        lat: 39.890211,
        lng: -104.876966
      },
      {
        address: '9221 E 107th Pl',
        lat: 39.893782,
        lng: -104.879189
      },
      {
        address: '9375 Longs Peak Dr',
        lat: 39.892470,
        lng: -104.878209
      },
      {
        address: '9210 E 107th Pl',
        lat: 39.893537,
        lng: -104.879554
      }
    ];
  }

}

export interface Site {
  lat: number;
  lng: number;
  address: string;
}
