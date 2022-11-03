import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expediente } from '../_model/expediente';
import { ExpedienteFiltroRequest } from '../_model/expedienteFiltroRequest';
import { Response } from "../_model/response";


@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {
  dialogData: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) {}

  getDialogData() {
    return this.dialogData;
  }

  buscarExpediente(filtro:ExpedienteFiltroRequest):Observable<Response<Expediente>>{
    let url="http://localhost:8082/expediente/buscarExpediente";
    return this.http.post<Response<Expediente>>(url, filtro);
  }

  consultarExpedientePorID(idExpediente: any): Observable<Response<Expediente>> {
    const url = "http://localhost:8082/expediente/consultarExpedientePorID/" +  idExpediente

    return this.http.get<Response<Expediente>>(url);
  }
}
