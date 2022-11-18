import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { Style } from '@capacitor/status-bar';


export interface IProductos{
  id: number;
  title:String;
  description:String;
  price:number;
  discountPrecentage:number;
  rating:number;
  stock:number;
  brand:String;
  category:String;
  thumbnail:String;
  images: string[];




}
@Injectable({
  providedIn: 'root'


})
export class CarritoService {

datos: IProductos[] =[
{id: 0, title:'Test',
description: 'Test description',
price: 1200,
discountPrecentage:50,
rating:10,
stock:50,
brand:'Test brand',
category:'Test categoria',
thumbnail:'Test thumbnail',
images: [] }



]
private carrito = [];
private contadorItemCarrito = new BehaviorSubject(0);

  constructor() { }

  obtenerIProductos(){
    return this.datos;
  }

  obtenerCarrito (){
    return this.carrito;
  }

  obtenerContadorItemCarrito(){
    return this.contadorItemCarrito;
  }

  anadirProducto(IProductos){
 let added = false;
 for (let p of this.carrito){
  if(p.id === IProductos.id){
    p.stock += 1;
    added = true;
    break;
  }
 }
 if (!added) {
  this.carrito.push(IProductos);
 }
 this.contadorItemCarrito.next(this.contadorItemCarrito.value + 1);

  }



  disminuirProducto(IProductos){
    for (let [index, p] of this.carrito.entries()){
      if (p.id === IProductos.id){
        p.stock -=1;
        if (p.stock == 0){
          this.carrito.splice(index, 1);
        }
      }
    }
    this.contadorItemCarrito.next(this.contadorItemCarrito.value -1);
  }


  eliminarProducto(IProductos){
    for (let [index, p] of this.carrito.entries()){
      if (p.id === IProductos.id){
        this.contadorItemCarrito.next(this.contadorItemCarrito.value - p.stock);
        this.carrito.splice(index, 1);
      }
    }

  }

}
//< >
