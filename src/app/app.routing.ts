import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailDetailsComponent } from './cocktail/pages/cocktail-details/cocktail-details.component';
import { CocktailsComponent } from './cocktail/pages/cocktails/cocktails.component';


const routes: Routes = [
    {
        path: 'cocktails',
        component: CocktailsComponent
    },
    {
        path: 'cocktail-details/:id',
        component: CocktailDetailsComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'cocktails'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
