import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { Chapter12 } from './chapter12/12.21.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    Chapter12
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [Chapter12]
})
export class AppModule { }
