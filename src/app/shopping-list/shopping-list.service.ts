import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('avocado', 4),
    new Ingredient('chicken', 1),
    new Ingredient('tomatoes', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient( ingredient: Ingredient ) {
    this.ingredients.push( ingredient );
    this.ingredientsChanged.emit( this.ingredients.slice() );
  }

  addIngredients( ingredients: Ingredient[]) {
    // for( let ingredient of ingredients) {
    //   this.addIngredient( ingredient );
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit( this.ingredients.slice() );
  }
}
