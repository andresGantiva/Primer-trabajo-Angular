import { Component } from "@angular/core";
import { ProductoService } from "../producto.service";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.css"],
})
export class ProductosComponent {
  producto = {
    nombre: "",
    descripcion: "",
    precio: 0,
    categoria: "",
    imagen: "",
  };

  constructor(private productoService: ProductoService) {}

  agregarProducto() {
    this.productoService.agregarProducto({ ...this.producto });

    // Limpiar el formulario
    this.producto = {
      nombre: "",
      descripcion: "",
      precio: 0,
      categoria: "",
      imagen: "",
    };
  }
}
