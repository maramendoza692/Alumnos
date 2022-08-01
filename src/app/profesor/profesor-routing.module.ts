import { Page404Component } from "../authentication/page404/page404.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GrupoProfeComponent } from "./grupo-profe/grupo-profe.component";
import { MateriasProfeComponent } from "./materias-profe/materias-profe.component";
import { VistaProfeComponent } from "./vista-profe/vista-profe.component";
import { PerfilAluProfesorComponent } from "./perfil-alu-profesor/perfil-alu-profesor.component";
import { EditarCalificacionesComponent } from "./perfil-alu-profesor/editar-calificaciones/editar-calificaciones.component";
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "materia",
    component: MateriasProfeComponent,
  },
  {
    path: "grupo/:idGrupo",
    component: GrupoProfeComponent,
  },
  {
    path: "alumnos",
    component: VistaProfeComponent,
  },
  /*{
    path: "materia",component: MateriasProfeComponent,

    children: [
      {
        path: "grupo/:idGrupo",
        component: GrupoProfeComponent,
        children: [
          {
            path: "alumnos/",
            component: VistaProfeComponent,
            children: [
              {
                path: "alumnoPerfil/:idAlumno",
                component: PerfilAluProfesorComponent,
                children: [
                  {
                    path: "editarCalif/:idCalificacion",
                    component: EditarCalificacionesComponent,
                  },
                ]
              },
            ],
          },
        ]
        
      },
      
    ],
  },*/
  

  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorRoutingModule {}
