import { Component,OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f',{static:false}) slForm:NgForm;
  subscription: Subscription;
  editMode=false;
  editedItemIndex:number;
  editedItem:Ingredient;
  // @ViewChild("nameInput",{static:false}) nameInputRef:ElementRef;
  // @ViewChild("amountInput",{static:false}) amntInputRef:ElementRef;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.startEditing
    .subscribe(
      (index:number)=>{
        this.editMode = true;
        this.editedItemIndex=index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    )
  }

  onAddIngredient(form:NgForm){
   const value = form.value;
    const ingredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredients(this.editedItemIndex,ingredient);
    }
    else{
      this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();

  }
  // onAddIngredient(){
  //   const name = this.nameInputRef.nativeElement.value;
  //   const amnt = this.amntInputRef.nativeElement.value;
  //   this.nameInputRef.nativeElement.value='';
  //   this.amntInputRef.nativeElement.value='';
  //   const ingredient = new Ingredient(name,amnt);
  //   this.shoppingListService.addIngredient(ingredient);
  // }

  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredients(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
