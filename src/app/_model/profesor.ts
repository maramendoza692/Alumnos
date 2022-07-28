import { GrupoMateria } from "./grupoMateria";

export class Profesor{
    pk_profesor: number;
	txt_clave: string;
	nombre: string;
	apePaterno: string;
	apeMaterno: string;
    correo: string;
	fk_gr_mt: GrupoMateria;

}