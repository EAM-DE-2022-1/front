import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistroUsuarioComponent } from "./Components/registro-usuario/registro-usuario.component";
import { HomeUsuarioComponent } from './Components/home-usuario/home-usuario.component';
import { ConfiguracionLucesComponent } from "./Components/configuracion-luces/configuracion-luces.component";
import { VistaProductoComponent } from "./Components/vista-producto/vista-producto.component";
import { EditarProductoComponent } from "./Components/editar-producto/editar-producto.component";
import { ConfiguracionAmbienteComponent } from './Components/configuracion-ambiente/configuracion-ambiente.component';
import { ConfiguracionGasesComponent } from './Components/configuracion-gases/configuracion-gases.component';
import { ConfiguracionAdministratorComponent } from './Components/configuracion-administrator/configuracion-administrator.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registroUsuario', component: RegistroUsuarioComponent},
  {path: 'usuarioHome', component: HomeUsuarioComponent},
  {path: 'configuracionLuces', component: ConfiguracionLucesComponent},
  {path: 'vistaProducto', component: VistaProductoComponent},
  {path: 'editarProducto', component: EditarProductoComponent},
  { path: 'configuracionAmbiente', component: ConfiguracionAmbienteComponent },
  { path: 'configuracionGases', component: ConfiguracionGasesComponent },
  { path: 'configuracionAdministrator', component: ConfiguracionAdministratorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
