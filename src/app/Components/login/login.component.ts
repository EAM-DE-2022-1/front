import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/Model/Usuario';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  loginError = false;
  emptyFieldsError = false;

  constructor(private service: ServiceService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  iniciarSesion(form: NgForm) {
    if (form.invalid) {
      this.emptyFieldsError = true;
      this.loginError = false;
      return;
    } else {
      this.service.iniciarSesion(this.usuario)
        .subscribe(
          res => {
            // Splittin token and storing as cookie
            this.cookieService.set('token', this.splitToken(res.token.toString()).toString());
            // Validating authorities
            const responseAuthority = res.authorities[res.authorities.length - 1].authority;
            if (responseAuthority === "ROLE_ADMIN") {
              this.router.navigateByUrl('configuracionAdministrator');
              this.cookieService.set('role', 'admin');
            } else if (responseAuthority === "ROLE_EMPLEADO") {
              this.router.navigateByUrl('homeUsuario');
              this.cookieService.set('role', 'empleado');
            }
          },
          err => {
            this.emptyFieldsError = false;
            this.loginError = true;
            this.usuario = new Usuario();
            this.router.navigateByUrl('**');
          }
        )
    }
  }

  splitToken(token: String) {
    var splittedToken = token.split(" ", 2);
    return splittedToken[splittedToken.length-1];
  }

}
