import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegistroUsuarioComponent} from "./registro-usuario/registro-usuario.component";
import {HomeUsuarioComponent} from './home-usuario/home-usuario.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registroUsuario', component: RegistroUsuarioComponent},
  {path: 'usuarioHome', component: HomeUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
