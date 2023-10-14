import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';
import { Producto } from 'src/app/services/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  producto: Producto | null = null;
  imagenBase64: string | null = null;
  constructor(private db: BasededatosService, private route: ActivatedRoute) { }

  ngOnInit(){

    // Obtén el ID del producto de los parámetros de la ruta
    const idProducto = +this.route.snapshot.paramMap.getAll('id');

    // Llama al método del servicio para buscar el producto por su ID
    this.db.buscarProductoPorId(idProducto).then(producto => {
      this.producto = producto;
    });

   

   
  }
}





