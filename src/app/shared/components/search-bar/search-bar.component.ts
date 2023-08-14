import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent {
  @Input()
  public placeholder :string = ''

  @Output ()
  public onValue = new EventEmitter <string>()

  emmitValue (value:string) :void {
    this.onValue.emit(value)
  }
}
