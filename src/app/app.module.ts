import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {KeyFilterModule} from 'primeng/keyfilter';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainAreaComponent } from './main-area/main-area.component';
import { CardDeckService } from './data/card-deck.service';
import { ShowCardsComponent } from './show-cards/show-cards.component';
import { GetRandomItemService } from './services/get-random-item.service'
import { ShuffleService } from './services/shuffle.service';
import { ChangeInputValueService } from './services/change-input-value.service';
// import { MenuCardComponent } from './menu-card/menu-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainAreaComponent,
    ShowCardsComponent,
    // MenuCardComponent,
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    SidebarModule,
    KeyFilterModule,
    BrowserAnimationsModule
  ],
  providers: [
    CardDeckService,
    GetRandomItemService,
    ShuffleService,
    ChangeInputValueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
