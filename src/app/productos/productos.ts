import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class Productos {
  products: Product[] = [
    { id: 1, name: 'loro', description: 'loro de montaña para todos los terrenos', price: 1200, image: '/img/descarga2.jpg' },
    { id: 2, name: 'tigre', description: 'tigre de montaña para todos los terrenos', price: 150, image: '/img/descarga1.jpg' },
    { id: 3, name: 'leon', description: 'leon de montaña para todos los terrenos', price: 50, image: '/img/descarga3.jpg' }
  ];
}
