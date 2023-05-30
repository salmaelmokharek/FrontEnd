import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, ResCategory, ResOneCategory } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

   apiUrl = 'http://localhost:4001/api/v1/categories';


  constructor(private http: HttpClient) { }

  getAllCategories(): Observable <ResCategory>{
    return this.http.get<ResCategory>(this.apiUrl)

}

 addCategory(category: Category): Observable <ResOneCategory> {
  return this.http.post<ResOneCategory>(this.apiUrl, category)
}

deleteCategory(_id: string | undefined) {
  const url = `${this.apiUrl}/${_id}`;
  return this.http.delete(url);
}

upCategory(id:string|undefined,data:Category):Observable<ResOneCategory> {
  return this.http.patch<ResOneCategory>(`${this.apiUrl}/${id}`,data)
}

getCategory(id: string):Observable<ResOneCategory> {
  return this.http.get<ResOneCategory>(`${this.apiUrl}/${id}`)
}

}
