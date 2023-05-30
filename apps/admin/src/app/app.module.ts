import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { ShowProductComponent } from './pages/show-product/show-product.component';
import {  SidebarComponent } from './sidebar/sidebar.component';
import { AuthGuard, AuthInterceptor, UsersModule } from '@frontcoding/users';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    DashboardComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    ListProductComponent,
    ShowProductComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    UsersModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi : true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
