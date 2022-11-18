import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarritoModeloPage } from './carrito-modelo.page';

const routes: Routes = [
  {
    path: '',
    component: CarritoModeloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarritoModeloPageRoutingModule {}
