import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false; // Not editMode: false.
  recipeForm: FormGroup;

  constructor( private route: ActivatedRoute,
               private recipeService: RecipeService ) { }

  ngOnInit() {
    this.route.params.subscribe(
      ( params: Params ) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        // console.log( this.editMode );
        this.initForm();
      }
    );
  }

  private initForm() {

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngredients = new FormArray([]);

    if ( this.editMode ) {
      const recipe = this.recipeService.getRecipe( this.id );

      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if ( recipe.ingredients ) {
        for ( const ingredient of recipe.ingredients ) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl( ingredient.name ),
              amount: new FormControl( ingredient.amount )
            })
          );
        }
      }

    }

    this.recipeForm = new FormGroup({
      name: new FormControl( recipeName ),
      imagePath: new FormControl( recipeImagePath ),
      description: new FormControl( recipeDescription ),
      ingredients: recipeIngredients
    });

  }

  onSubmit() {
    console.log( this.recipeForm );
  }
}
