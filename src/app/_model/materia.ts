import { Ciclo } from "./ciclo";
import { Profesor } from "./profesor";
import { AluMat } from './aluMat';
import { Status } from "./Status";
import { Promedio } from "./promedio";

export class Materia{
    idMateria: number;
    clave: string;
    descMateria: string;
    status: Status;
    idPromedio:Promedio;
    ciclo: Ciclo;
}