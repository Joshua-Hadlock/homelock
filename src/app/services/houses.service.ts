import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http: HttpClient) { }

  searchByLocation(postalCode: number) {
    return this.http.get(`https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=${postalCode}&page=1&pagesize=100`, {headers: {'apikey': environment.apiKey}}).pipe(
      catchError(err => {
      return 'E';
      }
    ))
  }

  searchHouseById(id: string) {
    return this.http.get(`https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?id=${id}`, {headers: {'apikey': environment.apiKey}}).pipe(
      catchError(err => {
        return 'E';
      })
    )
  }
}
