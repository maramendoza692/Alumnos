import { Materia } from './materia';
import { Profesor } from './profesor';
import { AluMat } from './aluMat';
import { Promedio } from './promedio';

export class Calificacion{

    pk_materia: Materia;
    pk_profesor: Profesor;
    pk_promedio: Promedio;
}