import { Grupo } from "./grupo";
import { Status } from "./Status";

export class Alumno{

    idAlumno: number;
	expediente: string;
	nombre: string;
	apePaterno: string;
	apeMaterno: string;
	curp: string;
	sexo: string;
    correo: string;
	idStatus: Status;
	idGrupo: Grupo;
}