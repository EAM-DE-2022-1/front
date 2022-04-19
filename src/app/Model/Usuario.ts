import { Authority } from "./Authority";

export class Usuario {
    token: String;
    id: number;
    nombre: String;
    nombreUsuario: String;
    email: String;
    password: String;
    authorities: Authority[];
}