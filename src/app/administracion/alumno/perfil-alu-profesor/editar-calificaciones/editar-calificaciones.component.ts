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
import { Grupo } from '../../../../_model/grupo';
import { FormularioMensajeComponent } from '../../todo-alumno/mensaje/formulario-mensaje/formulario-mensaje.component';
import { Calificaciones } from 'src/app/_model/calificaciones';
import { CalificacionesService } from 'src/app/_services/calificaciones.service';
import { CalificacionesRequest } from 'src/app/_model/calificacionesRequest';


@Component({
  selector: 'app-editar-calificaciones',
  templateUrl: './editar-calificaciones.component.html',
  styleUrls: ['./editar-calificaciones.component.sass']
})
export class EditarCalificacionesComponent implements OnInit {

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
   
  constructor(
    public dialogRef: MatDialogRef<EditarCalificacionesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public calificacionesService: CalificacionesService,
    public grupoService: GrupoService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = this.alumateria[1]
      this.alumateria = data.alumateria;
    } else {
      this.dialogTitle = "add";
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
      num_cal_unidad_uno:[this.calificaciones.num_cal_unidad_uno],
      num_cal_unidad_dos: [this.calificaciones.num_cal_unidad_dos],
      num_cal_unidad_tres: [this.calificaciones.num_cal_unidad_tres]
  
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){
   console.log(this.calificaciones)
  }

  aceptar(){
    console.log(this.calificacionesForm)
    if(this.calificaciones!=null && this.calificaciones.pk_calificacion! >0){
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



  public confirmAdd(): void {

    this.calificacionesService.guardarCalificaciones(this.calificacionesForm.value).subscribe(result =>{
    console.log(this.calificacionesForm.value)
    });
  }
}