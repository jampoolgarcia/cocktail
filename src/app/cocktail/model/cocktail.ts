export interface CocktailI {
    id: string;
    name: string;
    img: string;
    glass: string;
    ingredients: string[];
    numIngredients: number;
    measures: string[];
    numMeasures: number;
    instruccions: string;
}

import * as _ from 'lodash';

export class Cocktail implements CocktailI {
    
    constructor(data: any){
        _.set(this, 'data', data);
    }

    get id(): string{
        return _.get(this, 'data.idDrink');
    }

    get name(): string{
        return _.get(this, 'data.strDrink');
    }
    
    get img(): string{
        return _.get(this, 'data.strDrinkThumb');
    }

    get glass(): string{
        return _.get(this, 'data.strGlass');
    }

    get ingredients(): string[]{
        return this.getList('strIngredient');
    }

    get numIngredients(): number{
        return this.ingredients.length;
    }

    get measures(): string[]{
        return this.getList('strMeasure');
    }

    get numMeasures(): number {
        return this.measures.length;
    }

    get instruccions(): string{
       return _.get(this, 'data.strInstructionsES') ? _.get(this, 'data.strInstructionsES') : _.get(this, 'data.strInstructions');
    }

    private getList(property: string): string[] {

        let i = 1;
        let item = _.get(this, `data.${property}${i}`);
        let list = [];

        while(item){
            list.push(item);
            i++;
            item = _.get(this, `data.${property}${i}`);
        }

        return list;

    }

}