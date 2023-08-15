import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, debounceTime, Subscription } from 'rxjs'

@Component({
  selector: 'shared-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
    'input { background-color:#e6e4e5; border-color: #262729; font-weight: 600  }',
    'input:focus { background-color:#e6e4e5; box-shadow: 0 0 0 .25rem rgba(38,39,41,.5); border-color:rgba(38,39,41,.5);  }',
  ]
})
export class SearchBarComponent implements OnInit, OnDestroy {

  private debouncer :Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder :string = '';

  @Input()
  public initialValue: string = '';

  @Output ()
  public onValue = new EventEmitter <string>()

  @Output ()
  public onDebounce = new EventEmitter <string>()

  ngOnInit(): void {
    // this.initialValue = this.initialValue
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe (value =>{
        this.onDebounce.emit(value);
      })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emmitValue (value:string) :void {
    this.onValue.emit(value);
  }

  onKeyPress( serachTerm:string ) :void {
    this.debouncer.next( serachTerm );
  }
}
