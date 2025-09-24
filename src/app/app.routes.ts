import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { Productos } from './productos/productos';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'nosotros', component: Nosotros },
  { path: 'productos', component: Productos },   
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
