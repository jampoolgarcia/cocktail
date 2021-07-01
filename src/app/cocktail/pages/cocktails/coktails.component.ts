import { Component, OnInit } from '@angular/core';
import { FilterI } from '../../components/filter/filter.interface';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styles: [
  ]
})
export class CocktailsComponent implements OnInit {

  public isShowFilter: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeShowFilter(){
    this.isShowFilter = !this.isShowFilter;
  }

  onFilter(filter: FilterI){
    console.log(filter);
  }

  

}
