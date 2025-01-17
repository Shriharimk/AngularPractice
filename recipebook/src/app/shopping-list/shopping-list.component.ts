import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
public ingredients: Ingredient[]=[
  new Ingredient('Apples',5),
  new Ingredient('Tomatoes',10)
];

onIngredientAdded(Ingredient: Ingredient){
  this.ingredients.push(Ingredient);
}
}
