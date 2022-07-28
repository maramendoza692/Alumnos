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
import { AdminModule } from '../../../../../admin/admin.module';

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
  add
  edit  
  disableSelect: boolean;  
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
      this.action = "edit"
      this.dialogTitle = data.alumno.expediente;
      this.alumno = data.alumno;
      console.log(this.action)
      this.edit = this.action
    } else {
      this.dialogTitle = "add";
      this.alumno = new AlumnoRequest();
      console.log(this.action)
      this.add = this.action
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
      idAlumno:[this.alumno.idAlumno],
      expediente: [this.alumno.expediente,[Validators.minLength(6),Validators.maxLength(6), Validators.required]],//
      nombre: [this.alumno.nombre],
      apePaterno: [this.alumno.apePaterno],
      apeMaterno: [this.alumno.apeMaterno],
      curp: [this.alumno.curp,[Validators.minLength(18),Validators.required]],
      sexo: [this.alumno.sexo],
      correo: [this.alumno.correo,[Validators.email]],
      status: [this.alumno.status],
      descGrupo: [this.alumno.descGrupo],
      idGrupo: [this.alumno.idGrupo],
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){
    this.verificarEdiatrAgregar() 
  }
  ngAfterContentInit(){
    this.seleccionarGrupo();
  }
  verificarEdiatrAgregar(){
    if(this.action == "edit"){
      this.disableSelect = true;  
    }else{
      this.disableSelect = false;
    }
  }

  aceptar(){
    console.log(this.alumnoForm)
    if(this.alumno!=null && this.alumno.idAlumno! >0){
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
          let grupo = (element.descGrupo)
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
