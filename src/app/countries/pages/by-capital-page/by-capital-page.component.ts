import { Component } from '@angular/core';
import { CountriesService } from '../../services/coutries.service';
import { Country } from '../../interfaces/countery';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: []
})
export class ByCapitalPageComponent {

  public countries : Country[] = []

  constructor( private countriesService : CountriesService ){}

  searchByCapital( term:string) {
    this.countriesService.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries
      })
  }
}