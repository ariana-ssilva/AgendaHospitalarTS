import { Pessoa } from './Pessoa.js';
export class Paciente extends Pessoa {

    public patologia: string;
    public dataCadastro: string;
    public dataAtualizado: string;
    public password: string;

    constructor(
        name: string,
        age: number,
        sex: string,
        cpf: string,
        nameMother: string,
        nameFather: string,
        email: string,
        phone: string,
        streetAdress: string,
        numberAdress: string,
        zipCode: string,
        city: string,
        state: string,
        coutry: string,
        patologia: string,
        dataCadastro: string,
        dataAtualizada: string,
        password: string
    ) {
        super(name, age, sex, cpf, nameMother, nameFather, email, phone, streetAdress, numberAdress, zipCode, city, state, coutry)
        this.patologia = patologia;
        this.dataCadastro = dataCadastro;
        this.dataAtualizado = dataAtualizada;
        this.password = password;

    }



    public toString(): string {
        return this.name + " Idade: " + this.age + " Patologia: " + this.patologia + " Cpf: " + this.cpf
            + "\n Data de cadastro: " + this.dataCadastro + "\n E-mail: " + this.email + "\n Sexo: " + this.sex
            + "\n Nome da mae: " + this.nameMother + "\n Nome do pai: " + this.nameFather + "\n Telefone: "
            + this.phone + "\n Codigo Postal: " + this.zipCode + "\n Cidade: " + this.city + "\n Estado: "
            + this.state + "\n Pais: " + this.country;
    }




}