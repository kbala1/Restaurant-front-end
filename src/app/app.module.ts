import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule} from "@angular/common/http";
import { OrderNowComponent } from './order-now/order-now.component';
import { CheckOutComponent } from './check-out/check-out.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PlaceOrderComponent } from './place-order/place-order.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    OrderNowComponent,
    CheckOutComponent,
    PlaceOrderComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
