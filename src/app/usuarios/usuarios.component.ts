import { Component, OnInit } from '@angular/core';
import { PeticionesServices} from '../services/peticiones.services';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers:[PeticionesServices]
})
export class UsuariosComponent implements OnInit {
  public user:any;
  constructor(public _PeticionesServices:PeticionesServices) {
    
   }

  ngOnInit() {
    //this.cargarUser();
    this._PeticionesServices.getUser().subscribe(
  		result => {
        this.user=result.data;
  			console.log(result);
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }
  // cargarUser(){
  //   this._PeticionesServices.getUser().subscribe(
  // 		result => {
  // 			this.user = result.data;
  // 		},
  // 		error => {
  // 			console.log(<any>error);
  // 		}
  // 	);
  // }

}
