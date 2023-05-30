import { AuthGuard } from './../../../../libs/users/src/lib/guards/auth.guard';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListCategoryComponent } from './pages/list-category/list-category.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { ListProductComponent } from './pages/list-product/list-product.component';

export const appRoutes: Route[] = [
  {path: 'admin', component: DashboardComponent, canActivate : [AuthGuard]},
  {path: 'admin/category', component: ListCategoryComponent , canActivate : [AuthGuard]},
  {path: 'admin/category/edit-category/:id', component: EditCategoryComponent , canActivate : [AuthGuard]},
  {path: 'admin/product', component: ListProductComponent, canActivate : [AuthGuard]},



];
