import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesServices{
  public url:string;
  constructor(public _hhtp: HttpClient) {
    this.url='https://reqres.in/';
  }
  getUser():Observable<any>{
    return this._hhtp.get(this.url+'api/users/2');
  }
}