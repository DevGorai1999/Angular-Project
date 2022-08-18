import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { ReciepeService } from "./recipe.service";


@Injectable({ providedIn:"root"})
export class RecipesResolverService implements Resolve<Recipe[]>{

    constructor(private dataStorageService:DataStorageService, private recipeservice:ReciepeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeservice.getRecipes();
        if(recipes.length === 0)
        {
            return this.dataStorageService.fetchRecipes();
        }
        else{
            return recipes;
        }  
    }

}