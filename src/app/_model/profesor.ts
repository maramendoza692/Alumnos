import { GrupoMateria } from "./grupoMateria";

export class Profesor{
    pk_profesor: number;
	txt_clave: string;
	txt_nombre: string;
	txt_ape_paterno: string;
	txt_ape_materno: string;
    txt_correo: string;
	fk_gr_mt: GrupoMateria;

}