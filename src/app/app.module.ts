import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';

import { AppComponent } from './app.component';
import { MainAreaComponent } from './main-area/main-area.component';


@NgModule({
  declarations: [
    AppComponent,
    MainAreaComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
