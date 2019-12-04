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
export class ShoppingEditComponent implements OnInit, OnDestroy {

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

  onSubmit( form: NgForm ) {
    const value = form.value;
    const newIngredient = new Ingredient( value.name, value.amount );

    if ( this.editMode ) {
      this.shoppingListService.updateIngredients( this.editItemIndex, newIngredient );
    } else {
      this.shoppingListService.addIngredient( newIngredient );
    }

    // resetting form
    this.editMode = false;
    form.reset();
  }

  onCLear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient( this.editItemIndex );
    this.onCLear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
