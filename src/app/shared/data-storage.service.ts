import { Recipe } from '../recipes/recipe.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {


  constructor( private http: HttpClient,
               private recipeService: RecipeService ) {}

  saveRecipes() {
    return this.http.put('https://ng-recipe-book-965f2.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  fetchRecipes() {
    this.http.get('https://ng-recipe-book-965f2.firebaseio.com/recipes.json')
    .pipe( map(
      ( response: any ) => {
        const recipes: Recipe[] = response;
        for ( const recipe of recipes ) {
          if ( !recipe.ingredients ) {
            console.log( recipe );
            recipe.ingredients = [];
          }
        }
        return recipes;
      }
    ))
    .subscribe(
      ( response: any ) => {
        const recipes: Recipe[] = response;
        this.recipeService.setRecipes( recipes );
      }
    );
  }
}
