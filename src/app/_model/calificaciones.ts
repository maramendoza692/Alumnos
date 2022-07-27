import { Materia } from './materia';
import { Alumno } from './alumno';

export class Calificaciones{
    idCalificacion: number;
    calUnidadUno: number;
    ncalUnidadDos: number;
    calUnidadTres: number;
    idAlumno: Alumno;
    idMateria: Materia;
}