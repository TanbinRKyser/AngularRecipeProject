import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipe: Recipe;
  recipe: Recipe;
  id: number;

  constructor( private recipeService: RecipeService,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    // This will only work when we first time load this component.
    // const id = this.route.snapshot.params.id;

    this.route.params.subscribe(
      ( params: Params ) => {
        this.id = +params.id;
        this.recipe = this.recipeService.getRecipe( this.id );
      }
    );
  }

  /* onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList( this.recipe.ingredients );
  } */

}
