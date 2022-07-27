import { Component, Inject, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,} from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AlumnoService } from 'src/app/_services/alumno.service';
import { AlumnoRequest } from 'src/app/_model/alumnoRequest';
import { Alumno } from 'src/app/_model/alumno';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnoFiltroRequest } from 'src/app/_model/alumnoFiltroRequest';
import { Grupo } from '../../_model/grupo';




@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.sass']
})
export class AlumnosComponent implements OnInit {

  action: string;
    dialogTitle: string;
    alumnoForm: FormGroup;
    alumno: AlumnoRequest;
    grupo = []
    dataArray: Alumno[];
    alumnoFiltroRequest!: AlumnoFiltroRequest;
    datos: MatTableDataSource<Alumno>;
    sort: any;

    constructor(
      
      
      public alumnoService: AlumnoService,
      private fb: FormBuilder
    ) {
      
      
      this.dialogTitle = "Buscar Alumno";
      this.alumno = new AlumnoRequest();
      this.alumnoForm = this.createContactForm();
    }
    formControl = new FormControl("", [
      //Validators.required,
      // Validators.email,
    ]);
    getErrorMessage() {
      return this.formControl.hasError("required")
        ? "Required field"
        : this.formControl.hasError("expediente")
        ? "Not a valid clave"
        : "";
    }
  
    createContactForm(): FormGroup {
        return this.alumnoForm = this.fb.group({
        expediente: [this.alumno.expediente],
        nombre: [this.alumno.nombre],
        curp: [this.alumno.curp],
        correo: [this.alumno.correo],
        //idGrupo: [this.alumno.idGrupo]
      });
    }
    submit() {
      // emppty stuff
    }
    
    ngOnInit(){
      this.filtrarCiclo();
    }

    filtrarCiclo(){
      this.alumnoService.consultarTodos().subscribe(data => {
        this.datos = new MatTableDataSource(data.list); 
        this.datos.sort = this.sort
        
          data.list.forEach((element) => {
            let grupo:Grupo = (element.idGrupo)
            this.grupo.push(grupo);
            
          }); 
          //item actual del array eindice del item actual del array
          let grupos = this.grupo.filter((value, index) => {
            return this.grupo.indexOf(value) === index;
            
          })
          
          grupos.sort();
          this.grupo = grupos;
      });
    }

    public confirmarBusqueda(): void {
      this.alumnoService.buscarAlumnoFiltro(this.alumnoForm.value).subscribe(data=>{
        let datos = data.list
        //console.log(data)
        
      }); 
    }
}
