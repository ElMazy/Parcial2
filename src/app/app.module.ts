import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CarritoModeloPage } from './carrito/carrito-modelo/carrito-modelo.page';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './usuarios/login/login.page';
import { RegistroPage } from './usuarios/registro/registro.page';
import { FolderPage } from './folder/folder.page';
import { IProductos } from './servicios/carrito.service';
import { IProducto } from './interfaces/iproducto';
import{ HttpClientModule} from '@angular/common/http';
import { CarritoModeloPageModule } from './carrito/carrito-modelo/carrito-modelo.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CarritoModeloPageModule, ReactiveFormsModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
