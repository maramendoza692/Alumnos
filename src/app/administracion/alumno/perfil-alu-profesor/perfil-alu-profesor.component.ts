import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute} from '@angular/router';
import { first } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { Alumno } from 'src/app/_model/alumno';
import { AlumnoService } from 'src/app/_services/alumno.service';
import { Calificaciones } from '../../../_model/calificaciones';
import { EditarCalificacionesComponent } from './editar-calificaciones/editar-calificaciones.component';

@Component({
  selector: 'app-perfil-alu-profesor',
  templateUrl: './perfil-alu-profesor.component.html',
  styleUrls: ['./perfil-alu-profesor.component.sass']
})
export class PerfilAluProfesorComponent  extends UnsubscribeOnDestroyAdapter implements OnInit {

  alumno : Alumno = new Alumno();
  alumateria : Object = new Object();
  
    displayedColumns = [
      "nombre",
      "cal1",
      "cal2",
      "cal3",
      "actions"
      
    ];
  
    dataArray: Object[];
    form: FormGroup;
    formBuilder: any;

  calificacionesService: any;
  calificaciones: Calificaciones = new Calificaciones()
    constructor( private activatedRoute: ActivatedRoute,
                private alumnoService: AlumnoService,
                public dialog: MatDialog,
                private snackbar: MatSnackBar,) {
      super();
    }
    ngAfterContentInit(){
  
    }
    ngOnInit() {
    this.consultarAlumnoPorID();
    this.consultarMateriasAlumno();
    this.consultarCalificacionesId();
    
    }
  
    consultarAlumnoPorID(){
      this.activatedRoute.params.subscribe( params =>{
        let idAlumno = params['idAlumno']
        if(idAlumno){
          this.alumnoService.consultarAlumnoPorID(idAlumno).subscribe(
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

    traerIdCalificaciones(){

      
    }

    editarAlumno(calificaciones?: Calificaciones, idCalificacion?: number ) {
       let mate = calificaciones != null ? calificaciones: new Calificaciones();
      this.alumateria[8] = idCalificacion
  
      const dialogRef = this.dialog.open(EditarCalificacionesComponent, {
        data: {
          calificaciones: mate,
          action: "edit",
        },
        
      });
      
      this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
  
        if (result === 1) {
          //this.alumnoService.editarAlumno(result).subscribe(resp =>{    
            
            this.showNotification(
              "snackbar-success",
              "Editado correctamente...!!!",
              "bottom",
              "center"
            );
            
          
          //})
          
        }
      });
    }
    consultarMateriasAlumno(){
      this.activatedRoute.params.subscribe( params =>{
        let idAlumno = params['idAlumno']
        if(idAlumno){
  
          this.alumnoService.consultarMateriasAlumno(idAlumno).subscribe(response => {
              if(response.status === 'OK'){
                this.alumateria = response.list;
                console.log(this.alumateria);
              }
    
          })
        } 
    
      })
    
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
      this.snackbar.open(text, "", {
        duration: 2000,
        verticalPosition: placementFrom,
        horizontalPosition: placementAlign,
        panelClass: colorName,
      });
    }
    consultarCalificacionesId() {
      
      this.activatedRoute.params.subscribe((params) => {
        let idCalificacion = params["alumateria[8]"];
        if (idCalificacion) {
          this.calificacionesService
            .consultarCalificacionesId(idCalificacion)
            .subscribe((response) => {
              if (response.status === "OK") {
                this.alumno = response.data;
                
              }
            });
        }
      });
    }
    editarCalificaciones(){
      this.dialog.open(EditarCalificacionesComponent, {
        data: {
          calificaciones: this.consultarCalificacionesId(),
          alumateria: this.consultarMateriasAlumno() ,
          alumno :this.alumno,
          action: "edit",
        }
    })
}
  
  }
    