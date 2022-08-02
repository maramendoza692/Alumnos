import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ProfesorMateria } from 'src/app/_model/profesorMateria';
import { MateriaService } from 'src/app/_services/materia.service';
import { ProfesorService } from 'src/app/_services/profesor.service';
import { Materia } from '../../_model/materia';

@Component({
  selector: 'app-materias-profe',
  templateUrl: './materias-profe.component.html',
  styleUrls: ['./materias-profe.component.sass']
})
export class MateriasProfeComponent implements OnInit {

  //materia : ProfesorMateria = new ProfesorMateria();
  //materia : Materia = new Materia();
  public dialog: MatDialog
  datos: any;
  //dataArray: ProfesorMateria[];
  //dataArray= new MatTableDataSource<Materia>();
  dataArray: Materia[]
  displayedColumns = [
    "materia",
  ];

  constructor(
    private profesorService: ProfesorService,
    private materiaService: MateriaService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.consultarTodos();
    //this.consultarProfesorMateria();
    console.log(this.dataArray)
  }
  public consultarTodos() {
    this.materiaService.consultarTodos().subscribe({
      //nos regresara los datos
      next: (data) => {
        this.dataArray = data.list;
      },
    });
  }

  // public consultarTodos(){
  //   this.materiaService.consultarTodos().subscribe(({list})=>{

  //   //this.dataArray = list
  //   this.dataArray = new MatTableDataSource<Materia>(list)
  //   });
    
  // }

  /*consultarProfesorMateria(){
    this.activatedRoute.params.subscribe( params =>{
      let idProfesor = params['idProfesor']
      if(idProfesor){
        this.profesorService.consultarProfesorMateria(idProfesor).subscribe(
          (response) => {
              
              
              if(response.status === 'OK'){
                this.materia = response.data;
                console.log(this.materia);
              }

          }
          
        )
      } 

    })

  }*/

}
