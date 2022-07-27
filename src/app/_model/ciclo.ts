import { Periodo } from "./periodo";
import { Status } from "./Status";

export class Ciclo {
    idCiclo:number;
    clave:string;
    descCiclo:string;
    status:Status;
    idPeriodo:Periodo;
    fechaInicio: Date;
    fechaFin:Date;

}