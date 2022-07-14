import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlumnoService } from '../../../_services/alumno.service';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.sass']
})
export class AgregarAlumnoComponent {

  alumnoForm: FormGroup;
  hide3 = true;
  agree3 = false;
 
  constructor(private form: FormBuilder, private http:HttpClient ,private alumnoService:AlumnoService ) {
    this.alumnoForm = this.form.group({  
      txt_expediente:['', Validators.required],
      txt_nombre:['',Validators.required ],
      txt_ape_paterno:['',Validators.required ],
      txt_ape_materno:['',Validators.required ],
      txt_curp:['',Validators.required],
      txt_sexo:['',Validators.required],
      txt_correo: ['',Validators.required],
      fk_status:['',Validators.required],
      fk_grupo:['',Validators.required]
      });
  }
  
  public guardarAlumno ():void{
    
    this.alumnoService.guardarAlumno(this.alumnoForm.value).subscribe(resp =>{
      //Reiniciar formulario al guardar
      this.alumnoForm.reset();
      alert("Guardado");
    })
  }

}
