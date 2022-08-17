import { Pessoa } from "./Pessoa.js";
export class Medico extends Pessoa {
    constructor(name, age, sex, cpf, nameMother, nameFather, email, phone, streetAddress, numberAddress, zipCode, city, state, country, especialidade, crm, turno, turnoFinal) {
        super(name, age, sex, cpf, nameMother, nameFather, email, phone, streetAddress, numberAddress, zipCode, city, state, country);
        this.especialidade = especialidade;
        this.crm = crm;
        this.turno = turno;
        this.turnoFinal = turnoFinal;
    }
    toString() {
        return this.name + "\n Idade: " + this.age + ":\n Especialidade: " + this.especialidade + "\n Crm: " + this.crm
            + "\n Turno: " + this.turno + " até " + this.turnoFinal + "\n Cpf: " + this.cpf
            + "\n E-mail: " + this.email + "\n Sexo: " + this.sex + "\n Nome da mae: " + this.nameMother
            + "\n Nome do pai: " + this.nameFather + "\n Telefone: " + this.phone + "\n Codigo Postal: "
            + this.zipCode + "\n Cidade: " + this.city + "\n Estado: " + this.state + "\n Pais: " + this.country;
    }
}
