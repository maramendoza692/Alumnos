import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/_model/grupo';
import { GrupoService } from 'src/app/_services/grupo.service';
import { MatDialog } from "@angular/material/dialog";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-grupo-profe',
  templateUrl: './grupo-profe.component.html',
  styleUrls: ['./grupo-profe.component.sass']
})
export class GrupoProfeComponent implements OnInit {

  public dialog: MatDialog
  datos: any;
  dataArray: Grupo[];
  displayedColumns = [
    "grupo",
  ];

  constructor(
    private grupoService: GrupoService,
  ) { }

  ngOnInit(): void {
    this.consultarTodos();
  }

  public consultarTodos() {
    this.grupoService.consultarTodos().subscribe({
      //nos regresara los datos
      next: (data) => {
        this.dataArray = data.list;
      },
    });
  }

  

}
