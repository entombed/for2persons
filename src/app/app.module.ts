import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { CardDeckService } from './data/card-deck.service';
import { ShowCardsComponent } from './show-cards/show-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    MainAreaComponent,
    ShowCardsComponent,
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    SidebarModule,
    BrowserAnimationsModule
  ],
  providers: [CardDeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
