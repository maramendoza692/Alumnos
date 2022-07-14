import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from '../../../_services/alumno.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.sass']
})
export class EditarAlumnoComponent {

  alumnoForm: FormGroup;
  formdata = {
    txt_expediente: "Expendiente",
    txt_nombre: "Nombre Alumno",
    txt_ape_paterno: "Apellido Paterno",
    txt_apematerno_: "Apellido Mateno",
    txt_curp: "CURP",
    txt_sexo: "Sexo",
    txt_correo:"Correo",
    fk_status: "Estatus",
    fk_grupo: "Grupo id"
  };

  constructor(private fb:FormBuilder,
              private alumnoService: AlumnoService)
               {this.alumnoForm = this.createContactForm()}

  createContactForm():FormGroup{
    return this.fb.group({
      txt_expediente: [this.formdata.txt_expediente, [Validators.required]],
      txt_nombre: [this.formdata.txt_nombre,[Validators.required]],
      txt_curp: [this.formdata.txt_curp,[Validators.required]],
      txt_sexo: [this.formdata.txt_sexo,[Validators.required]],
      txt_correo: [this.formdata.txt_correo,[Validators.required]],
      fk_status: [this.formdata.fk_status,[Validators.required]],
      fk_grupo: [this.formdata.fk_grupo,[Validators.required]]
    });
  }    
   
  editarAlumno(){

  }
  
}