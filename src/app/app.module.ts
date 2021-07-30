import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SaleOrderHeaderComponent } from './components/sale-order-header/sale-order-header.component';
import { SaleOrderDetailComponent } from './components/sale-order-detail/sale-order-detail.component';
import { LoginComponent } from './components/login/login.component';
import { OrderTodayComponent } from './components/order-today/order-today.component';
import { LoginLayoutComponent } from './layout/login/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layout/home/home-layout/home-layout.component';
import { FileAttachDialogComponent } from './file-attach-dialog/file-attach-dialog.component';
import { OptionSettingComponent } from './components/option-setting/option-setting.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SaleOrderHeaderComponent,
    SaleOrderDetailComponent,
    LoginComponent,
    OrderTodayComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    OptionSettingComponent,
    FileAttachDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatListModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
