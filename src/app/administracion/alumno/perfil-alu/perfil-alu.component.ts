import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

import { first } from 'rxjs';
import { Alumno } from 'src/app/_model/alumno';
import { AlumnoService } from 'src/app/_services/alumno.service';



@Component({
  selector: 'app-perfil-alu',
  templateUrl: './perfil-alu.component.html',
  styleUrls: ['./perfil-alu.component.sass']
})
export class PerfilAluComponent implements OnInit {

alumno : Alumno = new Alumno();


  displayedColumns = [
    "clave",
    "nombre",
    "profesor",
    "calificacion"
    
  ];

  
  form: FormGroup;
  formBuilder: any;
 
 

 
  constructor( private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private alumnoService: AlumnoService) {
   
  
  }
  
  ngOnInit() {
this.consultarAlumnoPorID();
     
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

      }//this.alumno= alumno //console.log(alumno)
      
    )
  } 

})

    }

}
  

