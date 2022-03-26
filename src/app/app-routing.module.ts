import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegistroUsuarioComponent} from "./registro-usuario/registro-usuario.component";
import {HomeUsuarioComponent} from './home-usuario/home-usuario.component';
import {ConfiguracionLucesComponent} from "./configuracion-luces/configuracion-luces.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registroUsuario', component: RegistroUsuarioComponent},
  {path: 'usuarioHome', component: HomeUsuarioComponent},
  {path: 'configuracionLuces', component: ConfiguracionLucesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
