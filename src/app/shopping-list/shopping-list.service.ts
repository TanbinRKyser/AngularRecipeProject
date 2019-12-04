import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {

  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('avocado', 4),
    new Ingredient('chicken', 1),
    new Ingredient('tomatoes', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient( index: number ) {
    return this.ingredients[index];
  }
  addIngredient( ingredient: Ingredient ) {
    this.ingredients.push( ingredient );
    // this.ingredientsChanged.emit( this.ingredients.slice() );
    this.ingredientsChanged.next( this.ingredients.slice() );
  }

  addIngredients( ingredients: Ingredient[]) {
    // for( let ingredient of ingredients) {
    //   this.addIngredient( ingredient );
    // }

    this.ingredients.push(...ingredients);
    // this.ingredientsChanged.emit( this.ingredients.slice() );
    this.ingredientsChanged.next( this.ingredients.slice() );
  }

  updateIngredients( index: number, newIngredient: Ingredient ) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next( this.ingredients.slice() );
  }
}
