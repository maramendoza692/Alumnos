import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/_model/evento';
import { Expediente } from 'src/app/_model/expediente';
import { EventoService } from 'src/app/_services/evento.service';
import { ExpedienteService } from 'src/app/_services/expediente.service';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.css']
})
export class ExpedienteComponent implements OnInit {

  displayedColumns = [
    
    "FechaSalida",
    "medico"
  ];

  fechaInicio = [];
  expediente: Expediente = new Expediente()
  eventos: Evento = new Evento()
  dataArray= new MatTableDataSource<Evento>();

  constructor(
    public expedienteService: ExpedienteService,
    public eventoService: EventoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.consultarExpedientePorID()
    this.consultarTodos()
  }

  consultarExpedientePorID(){
    this.activatedRoute.params.subscribe( params =>{
      let idExpediente = params['idExpediente']
      if(idExpediente){
        this.expedienteService.consultarExpedientePorID(idExpediente).subscribe(
          (response) => {
              
              
              if(response.status === 'OK'){
                this.expediente = response.data;
                console.log(this.expediente);
              }

          }
          
        )
      } 

    })

  }

  consultarTodos(){
    this.eventoService.consultarTodos().subscribe(({list})=>{

    this.dataArray = new MatTableDataSource<Evento>(list)
      console.log(this.dataArray)
      
    });
    
  }

  buscarEvento(){
    this.eventoService.consultarTodos().subscribe(data =>{
       data.list.forEach((element) => {

        let fechaInicio = new Date(element.fechaIngreso).toLocaleDateString('ko-KR');
          fechaInicio=fechaInicio.substring(0,4)
           this.fechaInicio.push(fechaInicio);

      });

      let fecha=this.fechaInicio;
        let fechas= fecha.filter((item, index)=>{
          return fecha.indexOf(item)===index;
        })
        fechas.sort();
        this.fechaInicio=fechas;

    })
  }

}
