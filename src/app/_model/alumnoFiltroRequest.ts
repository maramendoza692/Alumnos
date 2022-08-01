import { Grupo } from './grupo';

export class AlumnoFiltroRequest {
    expediente: string;
    nombre:string;
    apePaterno:string;
    apeMaterno:string;
    curp:string;
    correo: string;
    idGrupo: Grupo;
    grupo: string;
}