import { Grupo } from "./grupo";
import { Status } from "./Status";

export class Alumno{

    pk_alumno: number;
	txt_expediente: string;
	txt_nombre: string;
	txt_ape_paterno: string;
	txt_ape_materno: string;
	txt_curp: string;
	txt_sexo: string;
	pho_foto: Blob;
    txt_correo: string;
	fk_status: string;
	fk_grupo: string;
	
}