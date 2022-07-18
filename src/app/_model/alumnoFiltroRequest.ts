import { Grupo } from './grupo';

export class AlumnoFiltroRequest {
    txt_expediente: string;
    txt_nombre:string;
    txt_curp:string;
    txt_correo: string;
    txt_desc_grupo: string;
    //fk_grupo: Grupo;
}