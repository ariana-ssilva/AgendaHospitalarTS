export class Agenda {
    constructor(id, paciente, medico, DataAgendamento, DataCancelamento) {
        this.id = id;
        this.paciente = paciente;
        this.medico = medico;
        this.DataAgendamento = DataAgendamento;
        this.DataCancelamento = DataCancelamento;
    }
    toString() {
        return "Medico: " + this.medico.name + " Paciente: " + this.paciente.name + " ID Agendamento: " + this.id
            + " na data de: " + this.DataAgendamento;
    }
}
