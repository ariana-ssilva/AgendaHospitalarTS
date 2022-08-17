import { Pessoa } from "./Pessoa.js";

export class Medico extends Pessoa {
    public especialidade: string;
    public crm: string;
    public turno: string;
    public turnoFinal: string;

    constructor(name: string, age: number, sex: string, cpf: string, nameMother: string, nameFather: string, email: string, phone: string, streetAddress: string, numberAddress: string, zipCode: string, city: string, state: string, country: string, especialidade: string, crm: string, turno: string, turnoFinal: string) {
        super(name, age, sex, cpf, nameMother, nameFather, email, phone, streetAddress, numberAddress, zipCode,
            city, state, country);
        this.especialidade = especialidade;
        this.crm = crm;
        this.turno = turno;
        this.turnoFinal = turnoFinal;
    }

    public toString(): string {
        return this.name + "\n Idade: " + this.age + ":\n Especialidade: " + this.especialidade + "\n Crm: " + this.crm
        + "\n Turno: " + this.turno + " até " + this.turnoFinal + "\n Cpf: " + this.cpf
        + "\n E-mail: " + this.email + "\n Sexo: " + this.sex + "\n Nome da mae: " + this.nameMother
        + "\n Nome do pai: " + this.nameFather + "\n Telefone: " + this.phone + "\n Codigo Postal: "
        + this.zipCode + "\n Cidade: " + this.city + "\n Estado: " + this.state + "\n Pais: " + this.country}


}
