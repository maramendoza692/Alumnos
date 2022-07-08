import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { SharedModule } from "./../shared/shared.module";

import { AdministracionRoutingModule } from './administacion-routing.module';
import { CiclosModule } from "./ciclo/ciclos.module";
import { TodoAlumnosComponent } from './alumno/todo-alumnos/todo-alumnos.component';
import { AgregarAlumnoComponent } from './alumno/agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './alumno/editar-alumno/editar-alumno.component';
import { EliminarComponent } from './alumno/todo-alumnos/mensaje/eliminar/eliminar.component';
import { FiltroBusquedaComponent } from './alumno/todo-alumnos/mensaje/filtro-busqueda/filtro-busqueda.component';
import { FormularioMensajeComponent } from './alumno/todo-alumnos/mensaje/formulario-mensaje/formulario-mensaje.component';
import { AlumnoModule } from "./alumno/alumno.module";



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    SharedModule,
    AdministracionRoutingModule,
    CiclosModule,
    AlumnoModule
  ],
})
export class AdministracionModule {}
