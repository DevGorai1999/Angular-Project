import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput") nameInputRef:ElementRef;
  @ViewChild("amountInput") amntInputRef:ElementRef;
  @Output() addIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const name = this.nameInputRef.nativeElement.value;
    const amnt = this.amntInputRef.nativeElement.value;
    this.nameInputRef.nativeElement.value='';
    this.amntInputRef.nativeElement.value='';
    const ingredient = new Ingredient(name,amnt);
    this.addIngredient.emit(ingredient);
  }
}
