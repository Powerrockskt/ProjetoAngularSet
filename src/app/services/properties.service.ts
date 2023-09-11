import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PropertiesLocation, PropertiesResult } from '../interfaces/propertieslocation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  private url = 'https://api.imobzi.app/v1/';
  private secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aGlyZF9wYXJ0eV9hcHBfaWQiOjc2MTE3NDU3MiwiY3JlYXRlZF9hdCI6IjIwMjItMDMtMDhUMTU6MTI6MjkuMjA0MzczWiIsImlzX3RoaXJkX3BhcnR5X2FjY2VzcyI6dHJ1ZX0.7vp-soYwvq2mwCGbBrMr_02-iAvd9pjDngWHX6QHhqQ';

  constructor(private http: HttpClient) { }

  getAllPropertiesLocations(cursor: string | null): Observable<PropertiesResult> {
    const headers = new HttpHeaders().set('X-Imobzi-Secret', this.secret);
    const url = cursor ? `${this.url}properties?cursor=${cursor}` : this.url + 'properties';

    return this.http.get<PropertiesResult>(url, { headers });
  }

  getProperty(db_id: string ): Observable<PropertiesLocation> {
    const headers = new HttpHeaders().set('X-Imobzi-Secret', this.secret);
    const url= this.url + 'property/' + db_id;

    return this.http.get<PropertiesLocation>(url, { headers });
  }

  getPropertiesLocationById(id: number, propertiesLocationList: PropertiesLocation[]): PropertiesLocation | undefined {
    return propertiesLocationList.find((propertiesLocation: PropertiesLocation) => propertiesLocation.id === id);
  }
}
