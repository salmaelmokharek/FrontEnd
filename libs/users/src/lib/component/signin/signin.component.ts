import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { AuthRes } from '../../models/authResponse';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  authError = false
  messageError = "Error is from the server, please try again !"

  loginForm = new FormGroup ({
    email : new UntypedFormControl('',Validators.required),
    password : new UntypedFormControl('',Validators.required),

  })
  constructor( private authService: AuthService, private storageService : StorageService, private router : Router) {}

signIn(email: string , password: string){
  this.authService.login(email, password).subscribe({
    next: (res : AuthRes) => {
      this.storageService.setToken(res.token)
      this.router.navigate(['/admin'])
      this.authError = false
      this.loginForm.reset()

    },
    error: (err: HttpErrorResponse) => {
      this.authError = true
      if (err.status == 400) {
        this.messageError = err.error.message

      }
    }

  })
}


submit(){
  if (this.loginForm.invalid) {
    return

  }
  this.signIn(this.form.email.value, this.form.password.value)
}

get form(){
  return this.loginForm.controls
}


}
