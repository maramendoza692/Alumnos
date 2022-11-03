import { Expediente } from "./expediente";
import { Medico } from "./medico";

export class Evento{
    
    idEvento!: number;
    idMedico!: Medico;
    idExpediente!: Expediente;
    causaIngreso!: string;
    diagnostico!: string;
    sintomas!: string;
    tratamiento!: string;
    fechaIngreso!: Date;
    fechaSalida!: Date;

}