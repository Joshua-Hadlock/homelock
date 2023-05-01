import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http: HttpClient) { }

  searchByLocation(lng: number, lat: number) {
    return this.http.get(`https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/snapshot?latitude=${lat}&longitude=${lng}&radius=2`, {headers: {'apikey': environment.apiKey}})
  }

  searchHouseById(id: string) {
    return this.http.get(`https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?id=${id}`, {headers: {'apikey': environment.apiKey}})
  }
}
