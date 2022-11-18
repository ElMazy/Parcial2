import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritoModeloPageRoutingModule } from './carrito-modelo-routing.module';

import { CarritoModeloPage } from './carrito-modelo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoModeloPageRoutingModule
  ],
  declarations: [CarritoModeloPage]
})
export class CarritoModeloPageModule {}
