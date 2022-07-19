import { Component, Inject } from '@angular/core';
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
import { Grupo } from '../../../../../_model/grupo';

@Component({
  selector: 'app-formulario-mensaje',
  templateUrl: './formulario-mensaje.component.html',
  styleUrls: ['./formulario-mensaje.component.sass']
})
export class FormularioMensajeComponent {

  action: string;
  dialogTitle: string;
  alumnoForm: FormGroup;
  alumno: AlumnoRequest;
  isClicked: boolean;
  alumnoE: AlumnoRequest;
  grupo = []
  dataArray: Alumno[];
  alumnoFiltroRequest!: AlumnoFiltroRequest;
  datos: MatTableDataSource<Grupo>;
  sort: any;
  
   
  constructor(
    public dialogRef: MatDialogRef<FormularioMensajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public alumnoService: AlumnoService,
    public grupoService: GrupoService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.alumno.txt_expediente;
      this.alumno = data.alumno;
    } else {
      this.dialogTitle = "add";
      this.alumno = new AlumnoRequest();
    }
    this.alumnoForm = this.createContactForm();
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
      return this.alumnoForm = this.fb.group({
      pk_alumno:[this.alumno.pk_alumno],
      txt_expediente: [this.alumno.txt_expediente,[Validators.minLength(4), Validators.maxLength(6),Validators.required]],//
      txt_nombre: [this.alumno.txt_nombre],
      txt_ape_paterno: [this.alumno.txt_ape_paterno],
      txt_ape_materno: [this.alumno.txt_ape_materno],
      txt_curp: [this.alumno.txt_curp,[Validators.minLength(18),Validators.required]],//
      txt_sexo: [this.alumno.txt_sexo],
      txt_correo: [this.alumno.txt_correo,[Validators.email]],//
      fk_status: [this.alumno.fk_status],
      txt_desc_grupo: [this.alumno.txt_desc_grupo],
       
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){
    this.seleccionarGrupo();
  }

  aceptar(){
    console.log(this.alumnoForm)
    if(this.alumno!=null && this.alumno.pk_alumno! >0){
      this.alumnoService.editarAlumno(this.alumnoForm.value).subscribe(data=>{
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
      this.alumnoService.guardarAlumno(this.alumnoForm.value).subscribe(result =>{
        console.log(this.alumnoForm.value)
        });
    }
    this.isClicked = true;
  }

  seleccionarGrupo(){
    this.grupoService.consultarTodos().subscribe(data => {
      this.datos = new MatTableDataSource(data.list); 
      this.datos.sort = this.sort
      
        data.list.forEach((element) => {
          let grupo = (element.txt_desc_grupo)
          this.grupo.push(grupo);
          
        });  
        //item actual del array e indice del item actual del array
        let grupos = this.grupo.filter((value, index) => {
          return this.grupo.indexOf(value) === index;
          
        })
        grupos.sort();
        this.grupo = grupos;
    });
  }

  public confirmAdd(): void {

    this.alumnoService.guardarAlumno(this.alumnoForm.value).subscribe(result =>{
    console.log(this.alumnoForm.value)
    });
  }
}
