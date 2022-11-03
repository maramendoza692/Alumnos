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
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { Expediente } from "src/app/_model/expediente";
import { ExpedienteFiltroRequest } from "src/app/_model/expedienteFiltroRequest";
import { ExpedienteService } from "src/app/_services/expediente.service";
import { ExpedienteComponent } from "../../expediente/expediente.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit
{
  displayedColumns = [
    "curp",
    "nombre",
    "actions",
  ];

  selection = new SelectionModel<Expediente>(true, []);
  index!: number;
  id!: number;

  expediente : Expediente = new Expediente();
  //Traer los datos desde el modelo 
  dataArray= new MatTableDataSource<Expediente>();
  public form!: FormGroup;
  formBusqueda!: FormGroup;

  expedienteFiltroRequest!: ExpedienteFiltroRequest;
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public expedienteService: ExpedienteService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {
    
  }
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild("filter", { static: true })
  filter!: ElementRef;
  ngAfterViewInit() {

    this.dataArray.paginator = this.paginator;


  }
  ngOnInit() {

    this.formBusqueda = this.formBuilder.group({
      curp: [""],

    });
    
  }
  
  buscarExpediente() {
    
    this.expedienteFiltroRequest = this.formBusqueda.value; //pasa los datos
    if (this.formBusqueda != null) {
      this.expedienteService.buscarExpediente(this.expedienteFiltroRequest).subscribe((data) => {

          this.dataArray.data = data.list;
        });
      this.formBusqueda.reset() //resetea elformulario
    }

  }

  
  open(idExpediente) {

    const dialogRef=this.dialog.open(ExpedienteComponent, {
      width:"700px",
      data:{
        id:idExpediente,
      }
  })

  }
  

}