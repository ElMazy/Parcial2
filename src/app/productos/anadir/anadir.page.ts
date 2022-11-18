import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { IProductos } from 'src/app/interfaces/iproductos';
import { SProductosService } from 'src/app/servicios/sproductos.service';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.page.html',
  styleUrls: ['./anadir.page.scss'],
})
export class AnadirPage implements OnInit {

    nuevoProducto: IProductos = {
      title: "Nombre producto",
      description: "Descripcion producto",
      brand: "Brand producto",
      category: "Categoría producto",
      thumbnail: "Miniatura producto",
      id: undefined,
      price: undefined,
      discountPrecentage: undefined,
      rating: undefined,
      stock: undefined,
      images: []
    }
  constructor(
    private productoServ: SProductosService,
    private router:Router
  ) { }

  ngOnInit() {
  }

    crearProducto(){
      this.productoServ.crearProducto(this.nuevoProducto).subscribe()
      this.router.navigateByUrl("/listar")
    }
}
