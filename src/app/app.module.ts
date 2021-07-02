//  angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

// routing 
import { AppRoutingModule } from './app.routing';

// external modules
import { NgxPaginationModule } from 'ngx-pagination';

// root component
import { AppComponent } from './app.component';

// compoents
import { CocktailsComponent } from './cocktail/pages/cocktails/cocktails.component';
import { CocktailDetailsComponent } from './cocktail/pages/cocktail-details/cocktail-details.component';
import { FilterComponent } from './cocktail/components/filter/filter.component';

// pipes 
import { CapitalizePipe } from './cocktail/pipes/capitalize.pipe';

@NgModule({
  declarations: [
    // root 
    AppComponent,

    // components
    CocktailsComponent,
    CocktailDetailsComponent,
    FilterComponent,

    // pipes 
    CapitalizePipe
  ],
  imports: [
    // angular
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // modules
    NgxPaginationModule,

    // routing
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
