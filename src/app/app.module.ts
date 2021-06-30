//  angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routing 
import { AppRoutingModule } from './app.routing';

// root component
import { AppComponent } from './app.component';

// compoents
import { CooktailsComponent } from './cocktail/pages/cooktails/cooktails.component';
import { CooktailDetailsComponent } from './cocktail/pages/cooktail-details/cooktail-details.component';
import { FilterComponent } from './cocktail/components/filter/filter.component';

@NgModule({
  declarations: [
    // root 
    AppComponent,

    // components
    CooktailsComponent,
    CooktailDetailsComponent,
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
