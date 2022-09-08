import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SaleItemComponent } from '../components/sale-item/sale-item.component';
import { ItemsListComponent } from '../components/items-list/items-list.component';
import ItemsService from 'src/services/items.service';
import { ItemDetailsComponent } from '../components/item-details/item-details.component';
import { RouterModule } from '@angular/router';
import Routes from './routes';
import { NewItemComponent } from '../components/new-item/new-item.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemTitleDirective } from './directives/item-title.directive';
import { HeaderComponent } from '../components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SaleItemComponent,
    ItemsListComponent,
    ItemDetailsComponent,
    NewItemComponent,
    ItemTitleDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    ReactiveFormsModule
    
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
