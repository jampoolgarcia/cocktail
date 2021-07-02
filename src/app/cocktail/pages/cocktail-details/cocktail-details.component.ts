import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailI } from '../../model/cocktail';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styles: [
  ]
})
export class CocktailDetailsComponent implements OnInit {

  public record!: CocktailI;
  public isLoading: boolean = true;

  constructor(private _service: CocktailService, private _route: ActivatedRoute) {
    
  }

  ngOnInit(): void {

    this.isLoading = true;

    this._route.params.subscribe(params =>{
      let id = params['id'];
      this._service.getById(id)
        .subscribe(res => {
          console.log(res);
          this.record = res;
          this.isLoading = false;
        })
    })
  }

}
