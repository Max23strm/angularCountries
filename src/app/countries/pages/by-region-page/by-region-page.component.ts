import { Component } from '@angular/core';
import { Country } from '../../interfaces/countery';
import { CountriesService } from '../../services/coutries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public regions : Country[] = []

  constructor( private countriesService : CountriesService ){}


  searchByRegion( term:string) {
    this.countriesService.searchRegion(term)
      .subscribe( region => {
        this.regions = region
      })
}
}
