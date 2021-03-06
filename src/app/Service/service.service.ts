import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8082';

  iniciarSesion(usuario: Usuario) {
    return this.http.post<Usuario>(this.url + '/auth/login', usuario);
  }



}
