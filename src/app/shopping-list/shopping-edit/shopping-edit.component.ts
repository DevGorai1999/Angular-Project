import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput",{static:false}) nameInputRef:ElementRef;
  @ViewChild("amountInput",{static:false}) amntInputRef:ElementRef;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const name = this.nameInputRef.nativeElement.value;
    const amnt = this.amntInputRef.nativeElement.value;
    this.nameInputRef.nativeElement.value='';
    this.amntInputRef.nativeElement.value='';
    const ingredient = new Ingredient(name,amnt);
    this.shoppingListService.addIngredient(ingredient);
  }
}
