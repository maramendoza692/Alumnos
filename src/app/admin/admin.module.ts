import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ExpedienteComponent } from "./expediente/expediente.component";
import { EventoComponent } from "./evento/evento.component";
import { MatTableExporterModule } from "mat-table-exporter";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    ExpedienteComponent,
    EventoComponent
  ],
  imports: [CommonModule, 
            AdminRoutingModule,
            MatSelectModule,
            MatFormFieldModule,
            MatTableModule,
            MatTableExporterModule],
})
export class AdminModule {}
