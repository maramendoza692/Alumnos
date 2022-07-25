import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { DataSource } from "@angular/cdk/collections";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, fromEvent, merge, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SelectionModel } from "@angular/cdk/collections";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlumnoService } from "src/app/_services/alumno.service";
import { Alumno } from "src/app/_model/alumno";
import { AlumnoFiltroRequest } from "src/app/_model/alumnoFiltroRequest";
import { MatTableDataSource } from "@angular/material/table";
import { AlumnoRequest } from '../../../_model/alumnoRequest';
import { Grupo } from '../../../_model/grupo';
import { PerfilAluComponent } from "../perfil-alu/perfil-alu.component";
@Component({
  selector: 'app-vista-profe',
  templateUrl: './vista-profe.component.html',
  styleUrls: ['./vista-profe.component.sass']
})
export class VistaProfeComponent  extends UnsubscribeOnDestroyAdapter
implements OnInit
{
displayedColumns = [
  "txt_expediente",
  "txt_nombre",
  "txt_ape_paterno",
  "txt_ape_materno",
  "txt_curp",
  "txt_correo",
  "fk_status",
  "pk_grupo",
  "actions",
];

alumnoForm: FormGroup;
exampleDatabase: AlumnoService;
selection = new SelectionModel<Alumno>(true, []);
index: number;
id: number;

datos: MatTableDataSource<Alumno>;
grupo = []
alumno : Alumno = new Alumno();
//Traer los datos desde el modelo 
dataArray= new MatTableDataSource<Alumno>();
public form: FormGroup;
formBusqueda: FormGroup;

claveFiltro = [];
alumnoFiltroRequest: AlumnoFiltroRequest;
constructor(
  public httpClient: HttpClient,
  public dialog: MatDialog,
  public alumnoService: AlumnoService,
  private snackbar: MatSnackBar,
  private formBuilder: FormBuilder
) {
  super();
}
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort)sort: MatSort;
// @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
// @ViewChild(MatSort, { static: true }) sort: MatSort;
@ViewChild("filter", { static: true }) filter: ElementRef;
ngAfterViewInit() {

  this.dataArray.paginator = this.paginator;


}
ngOnInit() {
  
  
  this.form = this.formBuilder.group({
    txt_curp: ["", Validators.required],
    txt_nombre: ["", Validators.required],
    txt_ape_paterno: ["", Validators.required],
    fk_status: ["", Validators.required],
    pk_grupo: ["", Validators.required],
    txt_sexo: ["", Validators.required],
    txt_correo: ["", Validators.required],
    txt_expediente: ["", Validators.required]
  });
  this.formBusqueda = this.formBuilder.group({
    txt_curp: [""],
    txt_nombre: [""],
    txt_ape_paterno: [""],
    fk_status: [""],
    txt_correo: [""],
    txt_expediente: [""],
    txt_desc_grupo: [""]

  });
 
}
refresh() {
  this.consultarTodos();
}
limpiar(){
  this.dataArray = null;
  this.dataArray.paginator = null;
}
public consultarTodos(){
  this.alumnoService.consultarTodos().subscribe(({list})=>{

  //this.dataArray = list
  this.dataArray = new MatTableDataSource<Alumno>(list)
    this.dataArray.paginator = this.paginator
  });
  
}
open(pk_alumno) {

  const dialogRef=this.dialog.open(PerfilAluComponent, {
    width:"700px",
    data:{
      id:pk_alumno,
    }
})

}

buscarAlumnoFiltro() {
  this.alumnoFiltroRequest = this.formBusqueda.value; //pasa los datos
  if (this.formBusqueda != null) {
    this.alumnoService.buscarAlumnoFiltro(this.alumnoFiltroRequest).subscribe((data) => {

        this.dataArray.data = data.list;
        console.log(this.formBusqueda.value);
        console.log(this.alumnoFiltroRequest.txt_desc_grupo);
      });
    this.formBusqueda.reset(); //resetea elformulario
  }

}






showNotification(colorName, text, placementFrom, placementAlign) {
  this.snackbar.open(text, "", {
    duration: 2000,
    verticalPosition: placementFrom,
    horizontalPosition: placementAlign,
    panelClass: colorName,
  });
}


edit(Data: Alumno) {}
}
