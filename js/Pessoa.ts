export class Pessoa {
    public name: string;
    public age: number;
    public sex: string;
    public cpf: string;
    public nameMother: string;
    public nameFather: string;
    public email: string;
    public phone: string;
    public streetAddress: string;
    public numberAddress: string;
    public zipCode: string;
    public city: string;
    public state: string;
    public country: string;

    constructor(name: string, age: number, sex: string, cpf: string, nameMother: string, nameFather: string, email: string,
        phone: string, streetAddress: string, numberAddress: string, zipCode: string, city: string, state: string,
        country: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.cpf = cpf;
        this.nameMother = nameMother;
        this.nameFather = nameFather;
        this.email = email;
        this.phone = phone;
        this.streetAddress = streetAddress;
        this.numberAddress = numberAddress;
        this.zipCode = zipCode;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}