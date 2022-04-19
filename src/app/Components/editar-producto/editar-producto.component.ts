import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  constructor() { }

  activar1: boolean = false
  activar2: boolean = false
  activar3: boolean = false
  activar4: boolean = false
  activar5: boolean = false
  activar6: boolean = false

  mostrar:boolean = false
  mostrarBoton1:boolean = true
  mostrarBoton2:boolean = false



  ngOnInit(): void {
  }

  editarBombillo():void{
    this.activar1=false;
  }

  guardarBombillo():void{
    this.activar1=true;
  }
  editarBombillo2():void{
    this.activar2=false;
  }

  guardarBombillo2():void{
    this.activar2=true;
  }
  editarBombillo3():void{
    this.activar3=false;
  }

  guardarBombillo3():void{
    this.activar3=true;
  }
  editarBombillo4():void{
    this.activar4=false;
  }

  guardarBombillo4():void{
    this.activar4=true;
  }
  editarBombillo5():void{
    this.activar5=false;
  }

  guardarBombillo5():void{
    this.activar5=true;
  }
  editarBombillo6():void{
    this.activar6=false;
  }

  guardarBombillo6():void{
    this.activar6=true;
  }

  mostrarProducto1():void{
    this.mostrar=false;
    this.mostrarBoton1=true;
    this.mostrarBoton2=false;
  }

  mostrarProducto2():void{
    this.mostrar=true;
    this.mostrarBoton1=false;
    this.mostrarBoton2=true;
  }

}
