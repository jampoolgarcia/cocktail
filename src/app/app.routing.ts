import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CooktailDetailsComponent } from './cocktail/pages/cooktail-details/cooktail-details.component';
import { CooktailsComponent } from './cocktail/pages/cooktails/cooktails.component';


const routes: Routes = [
    {
        path: 'coocktails',
        component: CooktailsComponent
    },
    {
        path: 'coocktail-details/:id',
        component: CooktailDetailsComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'coocktails'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
