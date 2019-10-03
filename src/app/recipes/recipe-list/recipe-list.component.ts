import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modle';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Perfect Guacamole', 'Sample', 'https://www.simplyrecipes.com/wp-content/uploads/2014/05/guacamole-horiz-a-1600.jpg'),
    new Recipe('Tacos', 'Sample','https://images-gmi-pmc.edge-generalmills.com/e59f255c-7498-4b84-9c9d-e578bf5d88fc.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
