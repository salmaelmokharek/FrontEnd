import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { usersRoutes } from './lib.routes';
import { SigninComponent } from './component/signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(usersRoutes), ReactiveFormsModule, HttpClientModule],
  declarations: [
    SigninComponent
  ],
})
export class UsersModule {}
