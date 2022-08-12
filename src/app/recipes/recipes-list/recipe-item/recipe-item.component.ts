import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ReciepeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Input() index:Number;
  constructor( private recipeService:ReciepeService) { }

  ngOnInit(): void {
  }

  // onRecipeSelected(){
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
