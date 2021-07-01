import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Cocktail, CocktailI } from '../model/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private url = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private _http: HttpClient) { }

  getByFirstLetter(value: string = 'a'){
    let letter = value.charAt(0);
    let fullUrl = `${this.url}search.php?f=${letter}`;
    return this._http.get(fullUrl)
    .pipe(
      map(res => this.parseData(_.get(res, 'drinks')))
    );
  }


  private parseData(recordList = []){
      let newRecordList: CocktailI[] = []

      _.forEach(recordList,  record => {
        let cocktail = new Cocktail(record);
        newRecordList.push(cocktail);
      })

      return newRecordList;
  }
}
