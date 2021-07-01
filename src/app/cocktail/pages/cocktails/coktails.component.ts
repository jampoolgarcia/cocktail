import { Component, OnInit } from '@angular/core';
import { FilterI } from '../../components/filter/filter.interface';
import { CocktailI } from '../../model/cocktail';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styles: [
  ]
})
export class CocktailsComponent implements OnInit {

  public isShowFilter: boolean = true;
  public isLoading: boolean = false;
  public recordList: CocktailI[] =[];

  constructor(private _service: CocktailService) { }

  ngOnInit(): void {
    this.getDefaultRecords();
  }

  changeShowFilter(){
    this.isShowFilter = !this.isShowFilter;
  }

  onFilter(filter: FilterI){
    console.log(filter);
  }

  getDefaultRecords(){

    this.isLoading = true;

    this._service.getByFirstLetter()
      .subscribe(res =>{
        console.log('res data:', res);
        this.isLoading = false;
      }, err => {
        console.log(err);
      })
      
  }
  

}
