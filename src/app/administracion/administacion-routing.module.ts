import { Page404Component } from "./../authentication/page404/page404.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlumnoComponent } from "./alumno/alumno.component";

import { AlumnosComponent } from "./alumnos/alumnos.component";
import { PerfilAluComponent } from "./alumno/perfil-alu/perfil-alu.component";

const routes: Routes = [
    {
      path: "",
      redirectTo: "alumno",
      pathMatch: "full",
    },
    {
      path: "alumno",
      loadChildren: () =>
      import("./alumno/alumno-routing.module").then((m) => m.AlumnoRoutingModule),
    },
    {
      path: "filtrobusqueda",
      component: AlumnosComponent,
    },
    { path: "**", component: Page404Component },
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AdministracionRoutingModule {


  }
  