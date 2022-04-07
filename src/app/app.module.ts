import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, NgForm } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { HomeUsuarioComponent } from './home-usuario/home-usuario.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import { ConfiguracionLucesComponent } from './configuracion-luces/configuracion-luces.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { MatCardModule } from '@angular/material/card';
import {RouterModule} from "@angular/router";
import { VistaProductoComponent } from './vista-producto/vista-producto.component';
import {MatTableModule} from "@angular/material/table";
import { EditarProductoComponent } from './editar-producto/editar-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroUsuarioComponent,
    HomeUsuarioComponent,
    ConfiguracionLucesComponent,
    VistaProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatSliderModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    RouterModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
