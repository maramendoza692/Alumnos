
import { Alumno } from "./alumno";
import { Materia } from "./materia";

export class CalificacionesRequest{
    idCalificacion: number;
    calUnidadUno: number;
    calUnidadDos: number;
    calUnidadTres: number;
    idAlumno: Alumno;
    idMateria:Materia;
}