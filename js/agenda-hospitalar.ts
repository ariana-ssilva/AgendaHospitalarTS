
import { Admin } from "./Admin.js";
import { Agenda } from "./Agenda.js";
import { Medico } from "./Medico.js";
import { Paciente } from "./Paciente.js";

let robin:Medico = new Medico("Robin Pereira", 18, "Outro", "916.149.670-75", "Robina Pereira", "Robin Wood",
"robin_batata123@yahoo.com", "49 98874-6352", "Rua Wood", "100", "88780-000", "Imbituba", "SC",
"BR", "Dentista", "CRM/SC 698547","08:30", "12:00");

console.log(robin);    
console.log(robin.toString());

let steve:Paciente = new Paciente("Steve Rogers",  29, "Masculino", "897.123.489-63", "Sarah Rogers", "Joseph Rogers",
"steve.rogers@yahoo.com", "47 98965-5263", "Av das Americas", "407", "88780-000", "Imbituba",
"SC", "BR", "dor", "15:00", "18:01", "senha");

console.log(steve);
console.log(steve.toString());

let agenda:Agenda = new Agenda(1, steve, robin, "20/07/2022", "");

console.log(agenda);
console.log(agenda.toString());

let admin:Admin = new Admin("ariana", "12346");
console.log(admin);

