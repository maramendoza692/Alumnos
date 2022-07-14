import { Grupo } from "./grupo";
import { Materia } from "./materia";

export class GrupoMateria {
    pk_gr_mt: number;
    fk_grupo:Grupo;
    fk_materia:Materia;
}