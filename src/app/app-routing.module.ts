import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginPage} from '././usuarios/login/login.page'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./usuarios/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./productos/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'anadir',
    loadChildren: () => import('./productos/anadir/anadir.module').then( m => m.AnadirPageModule)
  },
  {
    path: 'actualizar/:id',
    loadChildren: () => import('./productos/actualizar/actualizar.module').then( m => m.ActualizarPageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./productos/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'eliminar/:id',
    loadChildren: () => import('./productos/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./usuarios/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'carrito-modelo',
    loadChildren: () => import('./carrito/carrito-modelo/carrito-modelo.module').then( m => m.CarritoModeloPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
