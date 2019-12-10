import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthFeatureModule } from './auth/auth-feature.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { DropdownDirective } from './shared/dropdown.directive';

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    AuthFeatureModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
