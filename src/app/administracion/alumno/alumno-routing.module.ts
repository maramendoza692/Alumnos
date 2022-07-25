import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from '../../authentication/page404/page404.component';
import { TodoAlumnoComponent } from "./todo-alumno/todo-alumno.component";
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { EditarAlumnoComponent } from './editar-alumno/editar-alumno.component';
import { PerfilAluComponent } from "./perfil-alu/perfil-alu.component";
import { VistaProfeComponent } from "./vista-profe/vista-profe.component";
import { PerfilAluProfesorComponent } from "./perfil-alu-profesor/perfil-alu-profesor.component";

const routes:Routes = [
    {
        path: "todos-alumnos",
        component: TodoAlumnoComponent
    },
    {
        path: "vista-profesor",
        component: VistaProfeComponent,
       
    },
    {
        path: "todos-alumnos/alumnoPerfil/:pk_alumno",
        component: PerfilAluComponent
    },
    {
        path: "vista-profesor/alumnoPerfil/:pk_alumno",
        component: PerfilAluProfesorComponent
    },
    {
        path: "**", component: Page404Component
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AlumnoRoutingModule{}
