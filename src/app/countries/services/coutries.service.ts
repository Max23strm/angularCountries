import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/countery';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl :string = "https://restcountries.com/v3.1"

  constructor( private http: HttpClient) { }

  searchCountryByAlphaCode (code: string) : Observable<Country | null> {
    const url : string =`${this.apiUrl}/alpha/${code}`
    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( ()=>of(null) )
        )
  }

  searchCapital (query: string) : Observable<Country[]> {
    const url : string =`${this.apiUrl}/capital/${query}`
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error=>{
          return of([])
        })
      )
  }
  searchCountry (query: string) : Observable<Country[]> {
    const url : string =`${this.apiUrl}/name/${query}`
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error=>{
          return of([])
        })
      )
  }
  searchRegion (query: string) : Observable<Country[]> {
    const url : string =`${this.apiUrl}/region/${query}`
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error=>{
          return of([])
        })
      )
  }

}
