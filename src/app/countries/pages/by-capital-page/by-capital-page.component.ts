import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/coutries.service';
import { Country } from '../../interfaces/countery';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
    'h2 { color: #262729; font-weight: 600  }',
    'hr { background-color:#262729;}',
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries : Country[] = []
  public initialValue :string =""
  public isLoading :boolean = false

  constructor( private countriesService : CountriesService ){}
  ngOnInit(): void {

    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initialValue = this.countriesService.cacheStore.byCapital.term
  }

  searchByCapital( term:string) {
    this.isLoading = true
    this.countriesService.searchCapital(term)
      .subscribe( countries => {
        this.countries = countries
        this.isLoading = false
      })
  }
}
