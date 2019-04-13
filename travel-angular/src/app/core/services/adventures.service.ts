import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdventureI } from '../models/adv.interface';

@Injectable({
  providedIn: 'root'
})
export class AdventuresService {
  private readonly getAllUrl = 'http://localhost:5000/adv/all';
  private readonly createUrl = 'http://localhost:5000/adv/create';
  private readonly editUrl = 'http://localhost:5000/adv/edit/'; //id
  private readonly deleteUrl = 'http://localhost:5000/adv/delete/'; //id

  private readonly likeUrl = 'http://localhost:5000/adv/like/'; //id

//   private readonly getDetailsUrl = 'http://localhost:5000/furniture/details/';
//   private readonly getMyUrl = 'http://localhost:5000/furniture/user';


  constructor(private http : HttpClient) { }

  getAllAdvS(): Observable<AdventureI[]>{
    return this.http.get<AdventureI[]>(this.getAllUrl);
  }
  
  createAdvS(body){
    return this.http.post(this.createUrl, body);
  }

  editAdvS(id, body){
    return this.http.put(this.editUrl + id, body);
  }

  delAdvS(id) {
    return this.http.delete(this.deleteUrl + id);
  }

//   getDetailsS(id): Observable<AdventureI>{
//     return this.http.get<AdventureI>(this.getDetailsUrl + id);
//   }

//   getMyPostsS(): Observable<AdventureI[]>{
//     return this.http.get<AdventureI[]>(this.getMyUrl);
//   }
}