import { Pessoa } from './Pessoa.js';
export class Paciente extends Pessoa {
    constructor(name, age, sex, cpf, nameMother, nameFather, email, phone, streetAdress, numberAdress, zipCode, city, state, coutry, patologia, dataCadastro, dataAtualizada, password) {
        super(name, age, sex, cpf, nameMother, nameFather, email, phone, streetAdress, numberAdress, zipCode, city, state, coutry);
        this.patologia = patologia;
        this.dataCadastro = dataCadastro;
        this.dataAtualizado = dataAtualizada;
        this.password = password;
    }
    toString() {
        return this.name + " Idade: " + this.age + " Patologia: " + this.patologia + " Cpf: " + this.cpf
            + "\n Data de cadastro: " + this.dataCadastro + "\n E-mail: " + this.email + "\n Sexo: " + this.sex
            + "\n Nome da mae: " + this.nameMother + "\n Nome do pai: " + this.nameFather + "\n Telefone: "
            + this.phone + "\n Codigo Postal: " + this.zipCode + "\n Cidade: " + this.city + "\n Estado: "
            + this.state + "\n Pais: " + this.country;
    }
}
