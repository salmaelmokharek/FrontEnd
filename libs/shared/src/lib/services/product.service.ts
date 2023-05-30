import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  apiUrl = 'http://localhost:4001/api/v1/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable <ResProduct>{
    return this.http.get<ResProduct>(this.apiUrl)

}
}
