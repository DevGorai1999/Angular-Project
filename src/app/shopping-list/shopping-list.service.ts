import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    startEditing = new Subject<number>();
   ingredients:Ingredient[] = [
        new Ingredient("Ingredient 1",500),
        new Ingredient("Ingredient 2",1000)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    updateIngredients(index:number,newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    deleteIngredients(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}