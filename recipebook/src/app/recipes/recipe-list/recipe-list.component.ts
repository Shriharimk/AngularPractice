import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[]=[
    new Recipe('test recipe','test recipe','https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&webp=true&resize=750,681'), 
    new Recipe('Anothertest recipe','test recipe','https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&webp=true&resize=750,681'), 
    
  ];
  @Output() recipeClicked = new EventEmitter<Recipe>();
  constructor(){

  }
  onRecipeSelected(recipe: Recipe){
    this.recipeClicked.emit(recipe)
  }

}
