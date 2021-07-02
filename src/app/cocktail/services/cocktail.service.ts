import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Cocktail, CocktailI } from '../model/cocktail';
import { FilterBy, FilterI } from '../components/filter/filter.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private url_base = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private _http: HttpClient){ }

  getByFirstLetter(value: string = 'a'): Observable<CocktailI[]> {
    let letter = value.charAt(0);
    let url = `${this.url_base}search.php?f=${letter}`;
    return this._http.get(url)
      .pipe(
        map(res => this.parseData(_.get(res, 'drinks')))
      );
  }

  getFilter(filter: FilterI): Observable<CocktailI[]>{

    let url = this.selectFilterUrl(filter);

    return this._http.get(url)
      .pipe(
        map(res => this.parseData(_.get(res, 'drinks')))
      );

  }

  getById(id:string): Observable<CocktailI>{
    return this._http.get<CocktailI>(`${this.url_base}lookup.php?i=${id}`)
        .pipe(
          map(res => {
            let data = this.parseData(_.get(res, 'drinks'));
            return data[0];
          })
        )
  }

  private selectFilterUrl(filter: FilterI): string{
    let url: string = '';

    if(filter.searchBy == FilterBy.name){
      url = `${this.url_base}search.php?s=`
    }else{
      url = `${this.url_base}filter.php?`;
      switch(filter.searchBy){
        case FilterBy.glass:
            url += 'g=';
          break;
        case FilterBy.ingredient:
            url += 'i=';
          break;
        case FilterBy.category:
            url+= 'c=';
          break;
        default:
            url += 'g=';
          break;
      }
    }

    url += filter.value

    return url;
  }

  private parseData(recordList = []): CocktailI[]{
      let newRecordList: CocktailI[] = []

      _.forEach(recordList,  record => {
        let cocktail = new Cocktail(record);
        newRecordList.push(cocktail);
      })

      return newRecordList;
  }

  
}
