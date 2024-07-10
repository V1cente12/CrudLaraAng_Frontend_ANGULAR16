import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
    categorias: any[] = [];
    categoriaEncontrada: any = null;
    categoriaEncontradanombre: any[] =[];
    categoriaId: number | null= null;
    categoriaNombre: string | null =null;
    nuevaCategoria: any = {};
    categoriaSeleccionada: any ={};

    constructor(private categoriaService :CategoriaService){}

    ngOnInit(): void {
      this.getCategorias();
    }

    getCategorias(): void{
      this.categoriaService.getCategorias()
      .subscribe(
        data =>{
          console.log('Datos recibidos:', data);
          this.categorias = data;
        },
        error =>{
          console.log('Error al obtener las categorías:', error);
        }
      );
    }

    getCategoriaespecifica(): void{
      if(this.categoriaId !== null){
        this.categoriaService.getCategoriaById(this.categoriaId)
        .subscribe(
          data =>{
            console.log('categoria encontrada', data);
            this.categoriaEncontrada = data;
          },
          error =>{
            console.log('error al buscar la categoira', error);
            this.categoriaEncontrada =null;
          }
        );
      }else{
        console.log('id de categoria no valido');
        
      }
    }

    getCategorianombre(): void{
      if(this.categoriaNombre !== null){
        this.categoriaService.getCategoriabyCat_nom(this.categoriaNombre)
        .subscribe(
          data =>{
            console.log('categoria/s encontrada', data);
            this.categoriaEncontradanombre = data;
          },
          error =>{
            console.log('error al buscar la categoira/s', error);
          }
        );
       

      }else{
        console.log('id de categoria no valido');
      }
    }

    agregarCategoria(): void{
      this.categoriaService.AddCategoria(this.nuevaCategoria)
      .subscribe(
        response => {
          console.log(response);
          this.getCategorias();
          this.nuevaCategoria = {};
        },
        error => {
          console.log(error);
        }
      );
    }

    editarCategoria(id: number): void{

    }

    eliminarCategoria(id: number): void{
      this.categoriaService.deleteCategoria(id)
      .subscribe(
        response => {
          console.log(response);
          this.getCategorias();
        },
        error =>{
          console.log(error);
        }
      );
    }
}
