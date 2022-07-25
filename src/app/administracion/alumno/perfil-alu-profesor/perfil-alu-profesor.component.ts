import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute} from '@angular/router';
import { first } from 'rxjs';
import { Alumno } from 'src/app/_model/alumno';
import { AlumnoService } from 'src/app/_services/alumno.service';
import { Calificaciones } from '../../../_model/calificaciones';
import { EditarCalificacionesComponent } from './editar-calificaciones/editar-calificaciones.component';

@Component({
  selector: 'app-perfil-alu-profesor',
  templateUrl: './perfil-alu-profesor.component.html',
  styleUrls: ['./perfil-alu-profesor.component.sass']
})
export class PerfilAluProfesorComponent implements OnInit {

  alumno : Alumno = new Alumno();
  alumateria : Object = new Object();
  
    displayedColumns = [
      "nombre",
      "cal1",
      "cal2",
      "cal3"
      
    ];
  
    dataArray: Object[];
    form: FormGroup;
    formBuilder: any;
  calificaciones: Calificaciones;
  
    constructor( private http: HttpClient,
                private activatedRoute: ActivatedRoute,
                private alumnoService: AlumnoService,
                public dialog: MatDialog,) {
     
    }
    ngAfterContentInit(){
  
    }
    ngOnInit() {
    this.consultarAlumnoPorID();
    this.consultarMateriasAlumno();
    
    }
  
    consultarAlumnoPorID(){
      this.activatedRoute.params.subscribe( params =>{
        let pk_alumno = params['pk_alumno']
        if(pk_alumno){
          this.alumnoService.consultarAlumnoPorID(pk_alumno).subscribe(
            (response) => {
                
                
                if(response.status === 'OK'){
                  this.alumno = response.data;
                  console.log(this.alumno);
                }
  
            }
            
          )
        } 
  
      })
  
    }
    editarCalificaciones(){
      this.dialog.open(EditarCalificacionesComponent, {
        data: {
          calificaciones: this.calificaciones,
           //action: "edit",
        }
    })
}
    consultarMateriasAlumno(){
      this.activatedRoute.params.subscribe( params =>{
        let pk_alumno = params['pk_alumno']
        if(pk_alumno){
  
          this.alumnoService.consultarMateriasAlumno(pk_alumno).subscribe(response => {
              if(response.status === 'OK'){
                this.alumateria = response.list;
                console.log(this.alumateria);
              }
    
          })
        } 
    
      })
    
    }
  
  }
    