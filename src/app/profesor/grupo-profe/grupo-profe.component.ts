import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/_model/grupo';
import { GrupoService } from 'src/app/_services/grupo.service';
import { MatDialog } from "@angular/material/dialog";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from 'src/app/_services/profesor.service';
import { GrupoMateria } from 'src/app/_model/grupoMateria';
import { MateriaService } from 'src/app/_services/materia.service';
import { Materia } from 'src/app/_model/materia';



@Component({
  selector: 'app-grupo-profe',
  templateUrl: './grupo-profe.component.html',
  styleUrls: ['./grupo-profe.component.sass']
})
export class GrupoProfeComponent implements OnInit {
  grupo : GrupoMateria = new GrupoMateria();
  //grupo : Grupo = new Grupo();

  public dialog: MatDialog
  datos: any;
  dataArray: Grupo[];
  displayedColumns = [
    "grupo",
  ];
  materia : Materia = new Materia();

  constructor(
    private profesorService: ProfesorService,
    private grupoService: GrupoService,
    private materiaService: MateriaService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.consultarGrupoporID()
  }

 
  consultarGrupoporID(){
    this.activatedRoute.params.subscribe( params =>{
      let idMateria = params['idMateria']
      if(idMateria){
        this.materiaService.consultarMateriaPorID(idMateria).subscribe(
          (response) => {
              
              
              if(response.status === 'OK'){
                this.materia = response.data;
                console.log(this.materia);
              }

          }
          
        )
      } 

    })

  }
  
  consultarGrupoMateria(){
    this.activatedRoute.params.subscribe( params =>{
      let idMateria = params['idMateria']
      if(idMateria){
        this.profesorService.consultarGrupoMateria(idMateria).subscribe(
          (response) => {
              
              
              if(response.status === 'OK'){
                this.grupo = response.data;
                
              }
              
          }
          
        )

      } 
      console.log(this.grupo);
    })
  }
}
