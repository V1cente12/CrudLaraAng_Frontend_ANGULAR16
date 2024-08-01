import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  private apiUrlreqres = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

    //obtener usuarios
  getUsers(page:number): Observable<any>{
    return this.http.get<any>(`${this.apiUrlreqres}/users?page=${page}`);
  }
}
