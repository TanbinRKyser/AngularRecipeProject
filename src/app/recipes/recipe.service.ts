import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe( 'Perfect Guacamole',
                'Sample',
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Guacomole.jpg/1920px-Guacomole.jpg',
                [
                  new Ingredient('Meat', 1),
                  new Ingredient('French Fires', 20)
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

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe( index: number ) {
    return this.recipes[ index ];
    // return this.recipes.slice()[ index ];
  }

  addIngredientsToShoppingList( ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients( ingredients );
  }
}
