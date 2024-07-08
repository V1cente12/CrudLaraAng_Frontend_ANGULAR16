import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/categoria');
  }

  getCategoriaById(id:number): Observable<any>{
    return this.http.get<any>('${this.apiUrl}/categoriaid/${id}');
  }

  AddCategoria(categoria:any): Observable<any>{
    return this.http.post<any>('${this.apiUrl}/addCategoria', categoria);
  }

  updateCategoria(id: number, categoria: any): Observable<any>{
    return this.http.put<any>('${this.apiUrl}/updateCategoria/${id}', categoria);
  }

  deleteCategoria(id:number): Observable<any>{
    return this.http.delete<any>('http://127.0.0.1:8000/api/deleteCategoriabyid/${id}');
  }
}
