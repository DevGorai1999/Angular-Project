import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { ReciepeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[ReciepeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor(private recipeService:ReciepeService) { }

  ngOnInit(): void {

    this.recipeService.recipeSelected
    .subscribe((recipe:Recipe)=>{
      this.selectedRecipe = recipe;
    })
  }


}
