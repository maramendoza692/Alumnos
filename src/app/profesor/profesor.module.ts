import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSortModule } from "@angular/material/sort";
import { MatTabsModule } from "@angular/material/tabs";
import { MatMenuModule } from "@angular/material/menu";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRadioModule } from "@angular/material/radio";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { ProfesorRoutingModule } from "./profesor-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ComponentsModule } from "../shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";
import { MateriasProfeComponent } from './materias-profe/materias-profe.component';
import { GrupoProfeComponent } from './grupo-profe/grupo-profe.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import { VistaProfeComponent } from '../profesor/vista-profe/vista-profe.component';
import { PerfilAluProfesorComponent } from "./perfil-alu-profesor/perfil-alu-profesor.component";

@NgModule({
  declarations: [ MateriasProfeComponent, GrupoProfeComponent, VistaProfeComponent, PerfilAluProfesorComponent],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    chartjsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    NgApexchartsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSortModule,
    MatTabsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatRadioModule,
    DragDropModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
    MatTableExporterModule
  ],
  providers: [],
})
export class ProfesorModule {}
