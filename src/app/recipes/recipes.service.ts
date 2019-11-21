import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    constructor() {
    }

    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Baryani',
            imageUrl: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/hyderabadi-biryani-recipe-500x500.jpg',
            ingredients: ['Rice', 'Chicken']
        },
        {
            id: 'r2',
            title: 'Allo Keema',
            imageUrl: 'https://indianambrosia.com/wp-content/uploads/2018/06/Keema-Aloo-4-1.jpg',
            ingredients: ['Potatoes', 'Meat', 'Salad']
        }
    ];

    getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(recipeId: string) {
        return {
            ...this.recipes.find(recipe => {
                return recipe.id === recipeId;
            })
        };
    }

    deleteRecipe(recipeId: string) {
        this.recipes = this.recipes.filter(recipe => {
            return recipe.id !== recipeId;
        });
    }
}
