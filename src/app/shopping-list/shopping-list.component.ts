import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient("Ingredient 1",500),
    new Ingredient("Ingredient 2",1000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }

}
