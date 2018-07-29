import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
