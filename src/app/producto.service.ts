import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos = [
    {
      nombre: 'Smartphone X',
      descripcion: 'Un smartphone con pantalla de 6.5" y 128GB de almacenamiento.',
      precio: 699000,
      categoria: 'Electrónica',
      imagen: 'https://via.placeholder.com/100'
    },
    {
      nombre: 'Auriculares TWS Sony',
      descripcion: 'Auriculares inalámbricos con cancelación de ruido.',
      precio: 330000,
      categoria: 'Accesorios',
      imagen: 'https://via.placeholder.com/100'
    }

  ];

  getProductos() {
    return this.productos;
  }

  agregarProducto(producto: any) {
    this.productos.push(producto);
  
}
}
