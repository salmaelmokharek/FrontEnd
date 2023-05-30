import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:4001/api/v1/categories';


  constructor(private http: HttpClient, router: ActivatedRoute) { }








  // logout() {
  //     // remove user from local storage and set current user to null
  //     if (this.userSubject.value) {
  //       // Supprimer l'utilisateur du stockage local
  //       localStorage.removeItem('user');
  //       // Mettre à jour le BehaviorSubject avec une valeur null
  //       this.userSubject.next(null);
  //     }
  //     // Rediriger l'utilisateur vers la page de connexion
  //     this.router.navigate(['/account/login']);
  // }

  // register(user: User) {
  //     return this.http.post(${this.apiUrl}/register, user);
  // }


  // getAllUser():Observable<Resuser>{
  //   return this.http.get<Resuser>(${this.apiUrl})
  //  }

  // getById(id: string) {
  //     return this.http.get<Resuser>(${this.apiUrl}/${id});
  // }

  // update(id: string | undefined, params: any) {
  //     return this.http.put(${this.apiUrl}/users/${id}, params)
  //         .pipe(map(x => {
  //             // update stored user if the logged in user updated their own record
  //             if (id == this.userValue._id) {
  //                 // update local storage
  //                 const user = { ...this.userValue, ...params };
  //                 localStorage.setItem('user', JSON.stringify(user));

  //                 // publish updated user to subscribers
  //                 this.userSubject.next(user);
  //             }
  //             return x;
  //         }));
  // }

  // deleteuser(id: string | undefined) {
  //   return this.http.delete(${this.apiUrl}/${id})
  //}
}
