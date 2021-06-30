//  angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routing 
import { AppRoutingModule } from './app.routing';

// root component
import { AppComponent } from './app.component';

// compoents
import { CocktailsComponent } from './cocktail/pages/cocktails/coktails.component';
import { CocktailDetailsComponent } from './cocktail/pages/cocktail-details/cocktail-details.component';
import { FilterComponent } from './cocktail/components/filter/filter.component';

@NgModule({
  declarations: [
    // root 
    AppComponent,

    // components
    CocktailsComponent,
    CocktailDetailsComponent,
    FilterComponent
  ],
  imports: [
    // angular
    BrowserModule,

    // routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
