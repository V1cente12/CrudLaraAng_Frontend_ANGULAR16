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

  //obtener categorias
  getCategorias(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/categoria`);
  }

  //obtener categoria por id
  getCategoriaById(id:number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/categoriaid/${id}`);
  }

  //obtener categoria por nom
  getCategoriabyCat_nom(cat_nom:string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/categoriacat_nom/${cat_nom}`);
  }

  //añadir categoria
  AddCategoria(categoria:any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/addCategoria`, categoria);
  }

  //actualizar categoria
  updateCategoria(id: number, categoria: any): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/updateCategoria/${id}`, categoria);
  }

  //eliminar categoria
  deleteCategoria(id:number): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/deleteCategoriabyid/${id}`);
  }
}
