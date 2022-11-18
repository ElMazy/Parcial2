import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonProgressBar, ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarritoModeloPageModule } from '../carrito/carrito-modelo/carrito-modelo.module';
import { CarritoModeloPage } from '../carrito/carrito-modelo/carrito-modelo.page';
import { CarritoService } from '../servicios/carrito.service';
import { IProductos } from '../servicios/carrito.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  carrito = [];
  contadorItemCarrito: BehaviorSubject<number>;
  public folder: string;
  carritoService: any ;
  IProductos = [] ;

@ViewChild('carrito', {static: false, read: ElementRef}) fab:ElementRef;

  constructor(private activatedRoute: ActivatedRoute, carritoService: CarritoService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.IProductos = this.carritoService.obtenerIProductos();
    this.carrito = this.carritoService.obtenerCarrito();
    this.contadorItemCarrito = this.carritoService.obtenerContadorItemCarrito();
  }
  anadirAlCarrito(Iproductos){
    this.carritoService.anadirProducto(this.IProductos)
  }

  async abrirCarrito(){

    let modal = await this.modalCtrl.create({
      component: CarritoModeloPage,
      cssClass: 'carrito-modelo'
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false){
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)

    function handleAnimationEnd(){
      if (!keepAnimated){
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }
}
