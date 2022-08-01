import {Ciclo} from "./ciclo";
import { Status } from "./Status";
//Mapeando tiene que ser igual al spring
export class Grupo{
    idGrupo:number;
    grupo:string;
    status:Status;
    ciclo: Ciclo;
}