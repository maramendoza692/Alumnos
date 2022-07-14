import { Periodo } from "./periodo";
import { Status } from "./Status";

export class Ciclo {
    pk_ciclo:number;
    txt_clave:string;
    txt_desc_ciclo:string;
    fk_status:Status;
    fk_periodo:Periodo;
    fechaInicio: Date;
    fechaFin:Date;

}