import { Materia } from './materia';
import { Profesor } from './profesor';
import { AluMat } from './aluMat';
import { Alumno } from './alumno';

export class Promedio{
    pk_promedio:number;
    num_cal_1: number;
    num_cal_2: number;
    num_cal_3: number;
    num_cal_promedio: number;
    fk_alumno: Alumno;
    fk_materia: Materia;
   
}