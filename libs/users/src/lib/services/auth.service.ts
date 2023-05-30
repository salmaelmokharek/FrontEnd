import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRes } from '../models/authResponse';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private readonly authUrl ="http://localhost:4001/api/v1/users"

  constructor(private http : HttpClient, private storageService : StorageService, private router : Router) { }

  login(email: string , password: string): Observable<AuthRes>{
    return this.http.post<AuthRes>(`${this.authUrl}/login`, {email, password})

  }
  logout(){
    this.storageService.removeToken()
    this.router.navigate(['/signin']);
  }
}
