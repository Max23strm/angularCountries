import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countery';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: [
    '.alert {color:#e6e4e5; border-color:#262729; background-color: #262729; font-weight: 600}',
    `img { width : 35px; }`,
    'td {background-color: #e6e4e5; color: #262729; font-weight: 600; text-align: center}',
    '.link-cell {min-width:75px}',
    'th {text-align: center;}'
  ]
})
export class CountryTableComponent {

  @Input()
  public countries : Country[] = []
}
