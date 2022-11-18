import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductos } from '../interfaces/iproductos';
import { environment } from 'src/environments/environment';
import { IProducto } from '../interfaces/iproducto';

//se comunica con json-server para todas las funciones básicas del crud
@Injectable({
  providedIn: 'root'
})
export class SProductosService {

  constructor(private http:HttpClient) { }
//exportar desde el module.ts
  listarProductos(): Observable < IProductos>{
    return this.http.get<IProductos>(`${environment.apiURL}/productos`)
    //get comando de json o read, put actualizar, delete eliminar
  }
  crearProducto(nuevoProducto: IProducto):Observable<IProducto> {
    return this.http.post<IProducto>(`${environment.apiURL}/productos`, nuevoProducto)
  }

getProductoByID(id: number):Observable<IProductos>{
  return this.http.get<IProductos >(`${environment.apiURL}/productos/?id=${id}`)
}
actualizarProducto(producto:any):Observable<IProductos>{
  return this.http.put<IProductos>(`${environment.apiURL}/productos/${producto.id}`, producto)
}

eliminarProductoById(producto:any):Observable<IProductos>{
return this.http.delete<IProductos>(`${environment.apiURL}/productos/${producto.id}`)
}
}
