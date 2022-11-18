import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarritoService, IProductos } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-carrito-modelo',
  templateUrl: './carrito-modelo.page.html',
  styleUrls: ['./carrito-modelo.page.scss'],
})
export class CarritoModeloPage implements OnInit {
  carrito: IProductos[] = [];
  constructor(private carritoService: CarritoService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.carrito = this.carritoService.obtenerCarrito();
  }

  disminuirProducto(IProductos){
    this.carritoService.disminuirProducto(IProductos);
  }

  aumentarProducto(IProductos){
    this.carritoService.anadirProducto(IProductos);
  }
  eliminarProducto(IProductos){
    this.carritoService.eliminarProducto(IProductos);
  }

  obtenerTotal(){
    return this.carrito.reduce ((i, j) => i + j.price * j.stock, 0);
  }

  close(){

    this.modalCtrl.dismiss();
  }

  ticketSalida(){

  }


}
