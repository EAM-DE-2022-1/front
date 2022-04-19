import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegistroUsuarioComponent} from "./registro-usuario/registro-usuario.component";
import {HomeUsuarioComponent} from './home-usuario/home-usuario.component';
import {ConfiguracionLucesComponent} from "./configuracion-luces/configuracion-luces.component";
import {VistaProductoComponent} from "./vista-producto/vista-producto.component";
import {EditarProductoComponent} from "./editar-producto/editar-producto.component";
import { ConfiguracionAmbienteComponent } from './configuracion-ambiente/configuracion-ambiente.component';
import { ConfiguracionGasesComponent } from './configuracion-gases/configuracion-gases.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registroUsuario', component: RegistroUsuarioComponent},
  {path: 'usuarioHome', component: HomeUsuarioComponent},
  {path: 'configuracionLuces', component: ConfiguracionLucesComponent},
  {path: 'vistaProducto', component: VistaProductoComponent},
  {path: 'editarProducto', component: EditarProductoComponent},
  { path: 'configuracionAmbiente', component: ConfiguracionAmbienteComponent },
  { path: 'configuracionGases', component: ConfiguracionGasesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
