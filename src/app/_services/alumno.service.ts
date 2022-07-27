import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { UnsubscribeOnDestroyAdapter } from '../shared/UnsubscribeOnDestroyAdapter';
import { Alumno } from '../_model/alumno';
import { Response } from "../_model/response";
import { AlumnoFiltroRequest } from '../_model/alumnoFiltroRequest';
import { AlumnoRequest } from '../_model/alumnoRequest';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService extends UnsubscribeOnDestroyAdapter{
  [x: string]: any;
  private readonly API_URL = "assets/data/clients.json";
  dialogData: any;
  dataChange: BehaviorSubject<Alumno[]> = new BehaviorSubject<Alumno[]>([]);
  isTblLoading = true;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) {super(); }
    
  getDialogData() {
    return this.dialogData;
  }

  public consultarTodos():Observable<Response<Alumno>>{
    const url = "http://localhost:8081/alumno/consultarTodos";
    
    return this.http.get<Response<Alumno>>(url,
      {headers: new HttpHeaders().append("Content-Type","application/json")});
  }

  consultarAlumnoPorID(idAlumno): Observable<Response<Alumno>> {
    const url = "http://localhost:8081/alumno/consultarAlumnoPorID/" +  idAlumno

    return this.http.get<Response<Alumno>>(url);
  }

  consultarMateriasAlumno(idAlumno): Observable<Response<Object[]>> {
    const url = "http://localhost:8081/alumno/consultarMateriasAlumno/" +  idAlumno

    return this.http.get<Response<Object[]>>(url);
  }

  
  guardarAlumno(alumno: AlumnoRequest): Observable<Response<Alumno>> {
    const url = "http://localhost:8081/alumno/guardarAlumno"; 
                                  //Url y body: objeto que contiene de lo que queremos crear
    return this.http.post<Response<Alumno>>(url,alumno)
  }

  editarAlumno(alumno: AlumnoRequest):Observable<Response<Alumno>>{
    const url = 'http://localhost:8081/alumno/actualizarAlumno';


    return this.http.put<Response<Alumno>>(url,alumno)
  }
  
  eliminarAlumno(idAlumno: number): Observable<number> {
    const url = "http://localhost:8081/alumno/borrarAlumnoPorId/" +  idAlumno

    return this.http.delete<number>(url);
  }

  buscarAlumnoFiltro(filtro: AlumnoFiltroRequest): Observable<Response<Alumno>> {
    const url = "http://localhost:8081/alumno/buscarAlumno"; 
                                  //Url y body: objeto que contiene de lo que queremos crear
    return this.http.post<Response<Alumno>>(url,filtro)
  }

  get data(): Alumno[] {
    return this.dataChange.value;
  }
}
