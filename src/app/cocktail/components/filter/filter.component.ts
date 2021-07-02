import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterBy, FilterI } from './filter.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent implements OnInit {

  public filter: FilterI = { searchBy: FilterBy.name, value: '' };
  public filterBy: string[] = [];

  @Input() isDisabled: boolean = false;

  @Output() onFilter = new EventEmitter<FilterI>();

  constructor() { }

  ngOnInit(): void {
    for(let item in FilterBy){
      if(isNaN(Number(item))){
        this.filterBy.push(item);
      }
    }
  }

  onSubmit(){
    this.onFilter.emit(this.filter);
  }

}
