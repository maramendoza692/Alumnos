import { Ciclo } from "./ciclo";
import { Profesor } from "./profesor";
import { AluMat } from './aluMat';
import { Status } from "./Status";
import { Promedio } from "./promedio";

export class Materia{
    pk_materia: number;
    txt_clave: string;
    des_materia: string;
    fk_status: Status;
    fk_promedio:Promedio;
    fk_ciclo: Ciclo;
}