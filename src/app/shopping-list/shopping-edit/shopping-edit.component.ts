import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';



@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  // @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  // @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
    @ViewChild( 'f', { static: false }) shoppingListForm: NgForm;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  subscription: Subscription;

  constructor( private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      ( index: number ) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);

        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  /* onAddItem() {
      const ingName = this.nameInputRef.nativeElement.value;
      const ingAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient( ingName, ingAmount );

      // this.ingredientAdded.emit(newIngredient);
      this.shoppingListService.addIngredient( newIngredient );
  } */
  onAddItem( form: NgForm ) {
    const value = form.value;
    const newIngredient = new Ingredient( value.name, value.amount );

    this.shoppingListService.addIngredient( newIngredient );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
