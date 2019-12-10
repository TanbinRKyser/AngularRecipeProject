import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  exports: []
})
export class AuthFeatureModule {}
