import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class SitesService {
  private sites: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.sites = db.collection('/sites').valueChanges();
  }

  public getAllSites(): Observable<Site[]> {
    return this.sites as Observable<Site[]>;
  }
}

export interface Site {
  lat: number;
  lng: number;
  address: string;
}
