import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryI } from '../models/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private readonly getAllUrl = 'http://localhost:5000/category/all';
  private readonly createUrl = 'http://localhost:5000/category/create';

  constructor(private http : HttpClient) { }

  getAllCatS(): Observable<CategoryI[]>{
    return this.http.get<CategoryI[]>(this.getAllUrl);
  }
  
  createCatS(body){
    return this.http.post(this.createUrl, body);
  }

}