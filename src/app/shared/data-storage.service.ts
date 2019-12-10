import { Recipe } from '../recipes/recipe.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {


  constructor( private http: HttpClient,
               private recipeService: RecipeService,
               private authService: AuthService ) {}

  saveRecipes() {
    const token = this.authService.getToken();

    // return this.http.put('https://ng-recipe-book-965f2.firebaseio.com/recipes.json', this.recipeService.getRecipes() );
    return this.http.put( 'https://ng-recipe-book-965f2.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes() );
  }

  fetchRecipes() {
    const token = this.authService.getToken();

    // this.http.get('https://ng-recipe-book-965f2.firebaseio.com/recipes.json')
    this.http.get( 'https://ng-recipe-book-965f2.firebaseio.com/recipes.json?auth=' + token )
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
