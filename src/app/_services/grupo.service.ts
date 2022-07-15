import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import {Grupo} from '../_model/grupo';
import {Response} from '../_model/response';
import { UnsubscribeOnDestroyAdapter } from '../shared/UnsubscribeOnDestroyAdapter';
import { Ciclo } from '../_model/ciclo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService extends UnsubscribeOnDestroyAdapter{
    private readonly API_URL = "assets/data/clients.json";
    dialogData: any;
    dataChange: BehaviorSubject<Grupo[]> = new BehaviorSubject<Grupo[]>([]);
    isTblLoading = true;
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
  constructor(private http:HttpClient) {super(); }

  consultarTodos():Observable<Response<Grupo>>{
    const url = "http://localhost:8081/grupo/consultarTodos";

    return this.http.get<Response<Grupo>>(url, 
      {headers: new HttpHeaders().append("Content-Type", "application/json")});
  }
}
