import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import {Materia} from '../_model/materia';
import { Response } from '../_model/response';



@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http:HttpClient) {}

  consultarTodos():Observable<Response<Materia>>{
      
    let url="http://localhost:8081/materia/consultarTodos";
    return this.http.get<Response<Materia>>(url,{headers: new HttpHeaders().append("Content-Type", "aplication/json")});

  }



}