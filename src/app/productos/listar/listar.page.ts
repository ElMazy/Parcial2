import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SProductosService } from 'src/app/servicios/sproductos.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage  {

  productos: any;

  constructor(private productosServ: SProductosService, private LoadingCtr: LoadingController) { }
//llama al servicio de productos

ionViewWillEnter(){
    this.loadProductos()
}



  async loadProductos(event?: InfiniteScrollCustomEvent){
    const loading = await this.LoadingCtr.create({
      message: "Cargando Productos :)",
      spinner: 'circles'

    }
    );
    await loading.present();
    this.productosServ.listarProductos().subscribe(
      (Response) => {

        let listString = JSON.stringify(Response)
        this.productos = JSON.parse(listString)
        event?.target.complete()
        loading.dismiss();
      },
      (error) =>{
        console.log(error.message)
        loading.dismiss();


      }
    )
  }
}
