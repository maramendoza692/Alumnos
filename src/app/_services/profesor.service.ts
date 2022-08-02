import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { UnsubscribeOnDestroyAdapter } from '../shared/UnsubscribeOnDestroyAdapter';
import { Response } from "../_model/response";
import { Profesor } from '../_model/profesor';
import { ProfesorMateria } from '../_model/profesorMateria';
import { Grupo } from '../_model/grupo';
import { GrupoMateria } from 'src/app/_model/grupoMateria';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService extends UnsubscribeOnDestroyAdapter{
  [x: string]: any;
  private readonly API_URL = "assets/data/clients.json";
  dialogData: any;
  dataChange: BehaviorSubject<Profesor[]> = new BehaviorSubject<Profesor[]>([]);
  isTblLoading = true;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) {super(); }
    
  getDialogData() {
    return this.dialogData;
  }

  public consultarTodos():Observable<Response<Profesor>>{
    const url = "http://localhost:8081/profesor/consultarTodos";
    
    return this.http.get<Response<Profesor>>(url,
      {headers: new HttpHeaders().append("Content-Type","application/json")});
  }

  consultarProfesorPorID(idProfesor): Observable<Response<Profesor>> {
    const url = "http://localhost:8081/profesor/consultarProfesorPorID/" +  idProfesor

    return this.http.get<Response<Profesor>>(url);
  }

  consultarProfesorMateria(idProfesor): Observable<Response<ProfesorMateria>> {
    const url = "http://localhost:8081/profesor/consultarProfesorMateria/" +  idProfesor

    return this.http.get<Response<ProfesorMateria>>(url);
  }

  consultarGrupoMateria(idMateria): Observable<Response<GrupoMateria>> {
    const url = "http://localhost:8081/profesor/consultarGrupoMateria/" +  idMateria

    return this.http.get<Response<GrupoMateria>>(url);
  }

  consultarGrupoAlumno(idGrupo): Observable<Response<Object[]>> {
    const url = "http://localhost:8081/profesor/consultarGrupoAlumno/" +  idGrupo

    return this.http.get<Response<Object[]>>(url);
  }

  

  
}
