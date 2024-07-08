import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
    categorias: any[];
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
          this.categorias = data;
        },
        error =>{
          console.log(error);
        }
      );
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
