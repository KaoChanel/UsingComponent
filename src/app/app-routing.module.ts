import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';

import { HomeLayoutComponent } from './layout/home/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login/login-layout/login-layout.component';
import { LoginComponent } from './components/login/login.component';
import { OrderTodayComponent } from './components/order-today/order-today.component';
import { SaleOrderHeaderComponent } from './components/sale-order-header/sale-order-header.component';
import { SaleOrderDetailComponent } from './components/sale-order-detail/sale-order-detail.component';

const routes: Routes = [
  { path:'', component: HomeLayoutComponent, canActivate: [AuthGuard], children: [{path: '', component: OrderTodayComponent}] },
  { path:'', component: LoginLayoutComponent, children: [{path: 'login', component: LoginComponent}] },
  { path:'sale-order-header', component: SaleOrderHeaderComponent, canActivate: [AuthGuard] },
  { path:'sale-order-detail/:id', component: SaleOrderDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
