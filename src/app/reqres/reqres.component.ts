import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent implements OnInit{
  users: any[]=[];
  page: number=1;

  constructor(private reqresService: ReqresService){}

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers():void{
    this.reqresService.getUsers(this.page)
    .subscribe(
      response =>{
        console.log('datosss recibidos:', response.data);
        this.users =  response.data;
      },
      error =>{
        console.log('error al obtener los usuarios',error);
      }
    );
  }
}
