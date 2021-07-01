import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private url = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private _http: HttpClient) { }

  getByFirstLetter(value: string = 'a'){
    let letter = value.charAt(0);
    let fullUrl = `${this.url}search.php?f=${letter}`;
    return this._http.get(fullUrl);
  }



}
