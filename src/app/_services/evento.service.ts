import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpRequest,  HttpEvent, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from "../_model/response";
import { Evento } from '../_model/evento';
import { EventoRequest } from '../_model/eventoRequest';
import { EventoFiltroRequest } from '../_model/eventoFiltroRequest';


@Injectable({
  providedIn: 'root'
})
export class EventoService {
  dialogData: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) {}

  getDialogData() {
    return this.dialogData;
  }

  consultarTodos():Observable<Response<Evento>>{
      
    let url="http://localhost:8082/evento/consultarTodos";
    return this.http.get<Response<Evento>>(url,{headers: new HttpHeaders().append("Content-Type", "aplication/json")});

  }

  buscarEvento(filtro: EventoFiltroRequest):Observable<Response<Evento>>{
    let url="http://localhost:8082/evento/buscarEvento";
    return this.http.post<Response<Evento>>(url, filtro);
  }

  guardarEvento(evento: EventoRequest): Observable<Response<Evento>> {
    let url = "http://localhost:8081/evento/guardarEvento"; 
                                  
    return this.http.post<Response<Evento>>(url,evento)
  }

}
