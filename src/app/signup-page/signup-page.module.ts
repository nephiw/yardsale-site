import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SignupPageComponent
  ],
  exports: [SignupPageComponent]
})
export class SignupPageModule { }
