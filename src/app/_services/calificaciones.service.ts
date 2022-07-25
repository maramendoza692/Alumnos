import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams,HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import {Response} from "../_model/response";
import { Calificaciones } from '../_model/calificaciones';


@Injectable({
  providedIn: 'root'
})
export class CalificacionesService extends UnsubscribeOnDestroyAdapter{
  private readonly API_URL = "assets/data/clients.json";
  dialogData: any;
  dataChange: BehaviorSubject<Calificaciones[]> = new BehaviorSubject<Calificaciones[]>([]);
  isTblLoading = true;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  calificaciones = new Calificaciones();



  constructor(private http:HttpClient) {super(); }
    
  getDialogData() {
    return this.dialogData;
  }

 
  guardarCalificaciones(calificaciones:Calificaciones): Observable<Response<Calificaciones>> {
    const url = "http://localhost:8081/calificaciones/guardarCalificaciones"; 
                                  //Url y body: objeto que contiene de lo que queremos crear
    return this.http.post<Response<Calificaciones>>(url,calificaciones)
  }

  editarCalificaciones(calificaciones: Calificaciones):Observable<Response<Calificaciones>>{
    const url = 'http://localhost:8081/calificaciones/actualizarCalificaciones';


    return this.http.put<Response<Calificaciones>>(url, calificaciones)
  }


  get data(): Calificaciones[] {
    return this.dataChange.value;
  }


}
