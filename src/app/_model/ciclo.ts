import { Periodo } from "./periodo";
import { Status } from "./Status";

export class Ciclo {
    ciclo:number;
    clave:string;
    nombre:string;
    status:Status;
    idPeriodo:Periodo;
    fechaInicio: Date;
    fechaFin:Date;

}