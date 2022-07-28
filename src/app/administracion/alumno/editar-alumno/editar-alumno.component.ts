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
    expediente: "Expendiente",
    nombre: "Nombre Alumno",
    apePaterno: "Apellido Paterno",
    txt_apematerno_: "Apellido Mateno",
    curp: "CURP",
    txt_sexo: "Sexo",
    correo:"Correo",
    fk_status: "Estatus",
    fk_grupo: "Grupo id"
  };

  constructor(private fb:FormBuilder,
              private alumnoService: AlumnoService)
               {this.alumnoForm = this.createContactForm()}

  createContactForm():FormGroup{
    return this.fb.group({
      expediente: [this.formdata.expediente, [Validators.required]],
      nombre: [this.formdata.nombre,[Validators.required]],
      curp: [this.formdata.curp,[Validators.required]],
      txt_sexo: [this.formdata.txt_sexo,[Validators.required]],
      correo: [this.formdata.correo,[Validators.required]],
      fk_status: [this.formdata.fk_status,[Validators.required]],
      fk_grupo: [this.formdata.fk_grupo,[Validators.required]]
    });
  }    
   
  editarAlumno(){

  }
  
}