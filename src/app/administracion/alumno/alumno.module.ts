import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableExporterModule } from "mat-table-exporter";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";
import { TodoAlumnosComponent } from "./todo-alumnos/todo-alumnos.component";
import { AlumnoService } from "src/app/_services/alumno.service";
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { EliminarComponent } from './todo-alumnos/mensaje/eliminar/eliminar.component';
import { FiltroBusquedaComponent } from './todo-alumnos/mensaje/filtro-busqueda/filtro-busqueda.component';
import { FormularioMensajeComponent } from './todo-alumnos/mensaje/formulario-mensaje/formulario-mensaje.component';


@NgModule({
    declarations:[
        //Componentes
        
        TodoAlumnosComponent,
        AgregarAlumnoComponent,
        EditarAlumnoComponent,
        EliminarComponent,
        FiltroBusquedaComponent,
        FormularioMensajeComponent
        
        
        
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        MatDialogModule,
        MatSortModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatTooltipModule,
        MatTableExporterModule,
        ComponentsModule,
        SharedModule,
    ],
    providers:[AlumnoService]
})

export class AlumnoModule{}