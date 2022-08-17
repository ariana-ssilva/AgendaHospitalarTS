import { Medico } from './Medico.js';
import { Paciente } from './Paciente.js';
export class Agenda {

    private id: number;
    private paciente: Paciente;
    private medico: Medico;
    private DataAgendamento: string;
    private DataCancelamento: string;

    constructor(id: number, paciente: Paciente, medico: Medico, DataAgendamento: string, DataCancelamento: string) {
        this.id = id;
        this.paciente = paciente;
        this.medico = medico;
        this.DataAgendamento = DataAgendamento;
        this.DataCancelamento = DataCancelamento;
    }

    public toString():string {
        return "Medico: " + this.medico.name + " Paciente: " + this.paciente.name + " ID Agendamento: " + this.id
                + " na data de: " + this.DataAgendamento;
    }

}