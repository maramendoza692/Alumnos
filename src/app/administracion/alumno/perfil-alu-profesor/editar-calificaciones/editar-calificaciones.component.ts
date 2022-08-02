import { Component, Inject, OnInit } from '@angular/core';
import { formatDate } from '@angular/common' 

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AlumnoService } from 'src/app/_services/alumno.service';
import { GrupoService } from 'src/app/_services/grupo.service';
import { Alumno } from 'src/app/_model/alumno';
import { AlumnoRequest } from 'src/app/_model/alumnoRequest';
import { AlumnoFiltroRequest } from 'src/app/_model/alumnoFiltroRequest';
import { MatTableDataSource } from '@angular/material/table';

import { Calificaciones } from 'src/app/_model/calificaciones';
import { CalificacionesService } from 'src/app/_services/calificaciones.service';
import { CalificacionesRequest } from 'src/app/_model/calificacionesRequest';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-calificaciones',
  templateUrl: './editar-calificaciones.component.html',
  styleUrls: ['./editar-calificaciones.component.sass']
})
export class EditarCalificacionesComponent implements OnInit {
  calificacion : Calificaciones = new Calificaciones();
  action: string;
  dialogTitle: string;
  calificacionesForm: FormGroup;

  isClicked: boolean;
  alumnoE: AlumnoRequest;
  grupo = []
  dataArray: Alumno[];
 alumno: AlumnoRequest;
  sort: any;
  calificaciones: CalificacionesRequest;
  alumateria : Object = new Object();
  alumnoService: AlumnoService;
  displayedColumns = [
    "nombre",
    "cal1",
    "cal2",
    "cal3",
    "actions"
    
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<EditarCalificacionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public calificacionesService: CalificacionesService,
    public grupoService: GrupoService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle == this.calificaciones.idMateria.nombre
      this.calificaciones= data.calificaciones
    } else {
      this.dialogTitle = "add"
      this.calificaciones = new CalificacionesRequest();
    }
    
    this.calificacionesForm = this.createContactForm();
  }
  formControl = new FormControl("", [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError("required")
      ? "Required field"
      : this.formControl.hasError("clave")
      ? "Not a valid clave"
      : "";
  }

  createContactForm(): FormGroup {
      return this.calificacionesForm = this.fb.group({
      calUnidadUno:[this.calificaciones.calUnidadUno],
      calUnidadDos: [this.calificaciones.calUnidadDos],
      calUnidadTres: [this.calificaciones.calUnidadTres]
  
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){

   console.log(this.alumateria)
  }

  aceptar(){
    console.log(this.calificacionesForm)
    if(this.calificaciones!=null && this.calificaciones.idCalificacion! >0){
      this.calificacionesService.editarCalificaciones(this.calificacionesForm.value).subscribe(data=>{
          console.log(data); 
          /*Swal.fire({
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 2500
          })*/
          this.dialogRef.close({estatus:true,data:data.data});
      })
    }else{
      this.calificacionesService.guardarCalificaciones(this.calificacionesForm.value).subscribe(result =>{
        console.log(this.calificacionesForm.value)
        });
    }
    this.isClicked = true;
  }

  consultarCalificacionesId() {
      
    this.activatedRoute.params.subscribe((params) => {
      let idCalificacion = params["idCalificacion"];
      if (idCalificacion) {
        this.calificacionesService
          .consultarCalificacionesId(idCalificacion)
          .subscribe((response) => {
            if (response.status === "OK") {
              this.calificacion= response.data;
              console.log(this.alumateria);
            }
          });
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

  public confirmAdd(): void {

    this.calificacionesService.guardarCalificaciones(this.calificacionesForm.value).subscribe(result =>{
    console.log(this.calificacionesForm.value)
    });
  }
}