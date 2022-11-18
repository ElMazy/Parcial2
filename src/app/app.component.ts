import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Productos', url: '/folder/id:', icon: 'file-tray-stacked' },
    { title: 'Login', url: 'login', icon: 'people-circle' },
    { title: 'Carro', url: 'carrito-modelo', icon: 'cart' },
    { title: 'Listar', url: 'listar', icon: 'pencil' },
    { title: 'Añadir', url: 'anadir', icon: 'add-circle' },
    { title: 'Detalle', url: 'detalle/:id', icon: 'information-circle' },
    //{ title: 'Registro', url: 'registro', icon: 'cart' },

  ];
  public labels = [];
  constructor() {}
}
