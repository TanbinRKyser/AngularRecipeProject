import { Recipe } from './recipe.modle';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe( 'Perfect Guacamole',
                'Sample',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Guacomole.jpg/1920px-Guacomole.jpg',
                [
                  new Ingredient('Meat',1),
                  new Ingredient('French Fires',20)
                ]
              ),
    new Recipe( 'Chicken Tacos',
                'Sample',
                // tslint:disable-next-line: max-line-length
                'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1280px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg'
                , [
                  new Ingredient('Chicken', 2),
                  new Ingredient('Sauce', 2)
                ]
              )
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
