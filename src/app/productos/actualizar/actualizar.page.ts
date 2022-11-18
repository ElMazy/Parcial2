import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SProductosService } from 'src/app/servicios/sproductos.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage  {

  producto = {
    id: 0,
title: "",
description:"",
price:"",
discountPercentage:"",
rating:"",
stock:"",
brand:"",
category:"",
thumbnail:"",
images:""
  }
  constructor(private productoServ:SProductosService, private router:Router) { }

  ionViewWillEnter(){
    this.getProductoByID(this.getIdFromURL())
  }

  getIdFromURL(){
    let URL = this.router.url
    let Array = URL.split("/", 3)
    let id = parseInt(Array[2])
    return id
  }
  getProductoByID(productoID:any){
    this.productoServ.getProductoByID(productoID).subscribe;
      (Response:any)=>{
        this.producto = {
          //este producto es un arreglo
          id: Response[0].id,
          title: Response[0].title,
          description: Response[0].description,
          price: Response[0].price,
          discountPercentage: Response[0].discountPercentage,
          rating: Response[0].rating,
          stock: Response[0].stock,
          brand: Response[0].brand,
          category: Response[0].category,
          thumbnail: Response[0].thumbnail,
          images: Response[0].images
        }
      }
    }
    actualizarProducto(){
      this.productoServ.actualizarProducto(this.producto).subscribe()
      this.router.navigateByUrl("/listar")
    }
}
