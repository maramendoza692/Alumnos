import {Ciclo} from "./ciclo";
import { Status } from "./Status";
//Mapeando tiene que ser igual al spring
export class Grupo{
    pk_grupo:number;
    txt_desc_grupo:string;
    fk_status:Status;
    fk_ciclo: Ciclo;
}