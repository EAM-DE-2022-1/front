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
import { ConfiguracionAdministratorComponent } from './configuracion-administrator/configuracion-administrator.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registroUsuario', component: RegistroUsuarioComponent},
  {path: 'usuarioHome', component: HomeUsuarioComponent},
  {path: 'configuracionLuces', component: ConfiguracionLucesComponent},
  {path: 'vistaProducto', component: VistaProductoComponent},
  {path: 'editarProducto', component: EditarProductoComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login'},
  { path: 'configuracionAmbiente', component: ConfiguracionAmbienteComponent },
  { path: 'configuracionGases', component: ConfiguracionGasesComponent },
  { path: 'configuracionAdministrator', component: ConfiguracionAdministratorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
