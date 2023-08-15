import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countery';
import { CountriesService } from '../../services/coutries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
    'h2 { color: #262729; font-weight: 600  }',
    'hr { background-color:#262729;}',
    '.btn {background-color:#262729; color: #e6e4e5; font-weight: 600}',
    '.btn-activo {color:#262729; background-color: #e6e4e5; font-weight: 600; border-color:#262729}'
  ]
})
export class ByRegionPageComponent implements OnInit {

  public countries : Country[] = []
  public regions : Region[] = ['Africa' , 'Americas' , 'Asia' , 'Europe' , 'Oceania']
  public selectedRegion ?: Region;

  public isLoading :boolean = false

  constructor( private countriesService : CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region
  }

  searchByRegion( term:Region) {
    this.isLoading = true
    this.selectedRegion = term
    this.countriesService.searchRegion(term)
    .subscribe( region => {
      this.countries = region
      this.isLoading = false
      })
}
}
