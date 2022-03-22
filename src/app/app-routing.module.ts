import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegistroUsuarioComponent} from "./registro-usuario/registro-usuario.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registroUsuario', component: RegistroUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
