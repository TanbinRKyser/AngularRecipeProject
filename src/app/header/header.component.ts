import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
// import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  /* @Output() featureSelected = new EventEmitter<string>();

  onSelect( feature: string ) {
    this.featureSelected.emit( feature );
  } */

  constructor( private dataStorageService: DataStorageService ) {}

  onSaveData() {
    this.dataStorageService.saveRecipes().subscribe(
      ( response ) => {
        // console.log( response );
      }
    );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }
}
