import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import {OrderNowComponent} from './order-now/order-now.component';
import {PlaceOrderComponent} from './place-order/place-order.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'order',
    component: OrderNowComponent
  },
  {
    path: 'placeOrder',
    component: PlaceOrderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
