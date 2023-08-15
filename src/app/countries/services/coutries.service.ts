import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of, map, tap } from 'rxjs';
import { Country } from '../interfaces/countery';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl :string = "https://restcountries.com/v3.1"

  public cacheStore : CacheStore ={
    byCountries: {term: '', countries:[]},
    byCapital: { term: '', countries:[]},
    byRegion: { countries:[]},
  }

  constructor( private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private getCountriesRequest ( url:string ) : Observable<Country[]> {
    return this.http.get<Country[]>( url )
      .pipe(
        catchError(()=>of([]))
      )
  }

  private saveToLocalStorage () {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage () {
    if(!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! );
  }

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
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byCapital = { term:query, countries}),
        tap(()=> this.saveToLocalStorage() )
      )

  }
  searchCountry (query: string) : Observable<Country[]> {
    const url : string =`${this.apiUrl}/name/${query}`
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCountries = { term:query, countries}),
      tap(()=> this.saveToLocalStorage() )
    )
  }
  searchRegion (query: Region) : Observable<Country[]> {
    const url : string =`${this.apiUrl}/region/${query}`
    return this.getCountriesRequest(url)
      .pipe(
        tap( countries => this.cacheStore.byRegion = { region:query, countries}),
        tap(()=> this.saveToLocalStorage() )
      )
  }

}
