import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly APP_TOKEN = 'app_token'

  token$ = new BehaviorSubject<string | null>(this.getToken());

  user = new BehaviorSubject<string | null>(null)   //pour stocker une variable

  setUser(name: string | null){
    this.user.next(name)                    //next pour changer la valeur d'un var
  }

  setToken(data : string){
    localStorage.setItem(this.APP_TOKEN,data)
  }

  getToken(){
    return localStorage.getItem(this.APP_TOKEN)
  }

  removeToken(){
    localStorage.removeItem(this.APP_TOKEN)
    this.setUser(null)
    this.token$.next(null)
  }

  expiredToken(exp : number){
    return Math.floor(new Date().getTime() / 1000) >=exp

  }

  getPayload(){
    const token =this.getToken()
    if (token && token.split('.').length == 3) {
      const payload = token.split('.')[1]
      const data =JSON.parse(atob(payload))
        this.setUser(data.name)
        return data

    }
    return null
  }

}
