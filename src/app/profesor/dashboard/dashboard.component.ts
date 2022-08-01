import { Component, OnInit, ViewChild } from "@angular/core";

import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Profesor } from 'src/app/_model/profesor';
import { ProfesorService } from 'src/app/_services/profesor.service';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"],
})
export class DashboardComponent implements OnInit {


  dato!:MatTableDataSource<Profesor>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isClicked: boolean;

  public profesor: Profesor[];

  dataArray: Profesor[];

  datos:[];

  columnas =[
    "id",
    "clave",
    "nombre",
    "apePaterno",
    "apeMaterno",
    "correo",
    "editar",
    "eliminar",
  ];


   // ************** FORMULARIO FORM DE HTML **************//

   public form:FormGroup;
   grupoForm: FormGroup;
 
   // ************** DATOS BUSQUEDA DINAMICA ************** //
   profesorFiltroRequest:any;
   busquedaDinamica: FormGroup;
 
 
   activateRoute: any;

   
  constructor(

    private profesorService: ProfesorService,
    private formBuilder: FormBuilder,
    public dialog:MatDialog,
  ) {}

  ngOnInit(): void{

    console.log("Entro Al Componente Profesor");

    // ************** DECLARACION PAR ALA BUSQUEDA DINAMICA   ************** //
    this.busquedaDinamica=this.formBuilder.group({

      clave:"",
      nombre:"",
      apePaterno:"",
      apeMaterno:"",
      correo:"",

    });

  }


  //  ************************** METODO CONSULTAR TODOS LOS PROFESORES  ************************** //

  consultarTodos(){

    this.profesorService.consultarTodos().subscribe(data=>{

      this.dato= new MatTableDataSource(data.list);

      this.dato.paginator= this.paginator;
      Swal.fire(
        ' Busqueda Exitosa ',
         ' ',
         'success'
       )

    });

   }

    // ************************** METODO BUSCAR PROFESOR DINAMICA   ************************** //

      buscarProfesor(){

        this.profesorFiltroRequest = this.busquedaDinamica.value;

        if(this.profesorFiltroRequest !=null){
          this.profesorService.buscarProfesor(this.profesorFiltroRequest).subscribe(data=>{
            console.log(data);

            if (data.message=='!!! Consulta Exitosa ¡¡¡ '){
              
              if(data.list.length !=0){
                console.log(data);
                Swal.fire(
                  ' Busqueda Exitosa ',
                   ' ',
                   'success'
                 );
                 this.dato = new MatTableDataSource(data.list);

                 if(data.list){
                   this.dato.paginator = this.paginator;
                 }

              }
            }else{
              
          Swal.fire(
            'Dato no encontrado',
            ' ',
            'error'
          );

          }

           
          });


        }else{

            Swal.fire(
                    'Dato no encontrado',
                    ' ',
                    'error'
                  );

        }

        this.busquedaDinamica.reset();
      }

          // ************************** METODO LIMPIAR  ************************** //


          limpiar(){

            try{
              this.dato.data=[];

            }catch{
              Swal.fire('Datos Correctamente Limpios', '', 'warning')
            }finally{
              this.busquedaDinamica.reset();
            }

          }



      // ************************** VALIDACION PARA SOLO LETRAS  **************************//

      validateFormat(event) {
        let key;
        if (event.type === 'paste') {
          key = event.clipboardData.getData('text/plain');
        } else {
          key = event.keyCode;
          key = String.fromCharCode(key);
        }
        const regex = /[a-zñ ]/;
         if (!regex.test(key)) {
          event.returnValue = false;
           if (event.preventDefault) {
            event.preventDefault();
           }
         }
        }

        // ************************** VALIDACION PARA LA PRIMERA MAYUSCULA ************************** //
        // capitalize(word){

        //   return word[0].toUpperCase() + word.slice(1);

        // }

        // ************************** VALIDACION PARA SOLO NUMEROS ************************** //
    validateFormat1(event) {
      let key;
      if (event.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
      } else {
        key = event.keyCode;
        key = String.fromCharCode(key);
      }
      const regex = /[0-9]/;
       if (!regex.test(key)) {
        event.returnValue = false;
         if (event.preventDefault) {
          event.preventDefault();
         }
       }
      }


}
