import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private  storageService : StorageService, private router : Router){}


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token : string |null = this.storageService.getToken()


    if (!token) {
      this.router.navigate(['/signin'])
      return false
    }


    if (token.split('.').length == 3) {
      const payload = token.split('.')[1]
      const {isAdmin, exp, username } = JSON.parse(atob(payload))
      this.storageService.setUser(username)

      return isAdmin && !this.storageService.expiredToken(exp)
    }
    return true;
  }

}
