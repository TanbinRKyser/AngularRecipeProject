import { Recipe } from './recipe.modle';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Perfect Guacamole', 'Sample',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Guacomole.jpg/1920px-Guacomole.jpg'),
    new Recipe('Chicken Tacos', 'Sample',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1280px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
