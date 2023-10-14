import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-listado-p',
  templateUrl: './listado-p.page.html',
  styleUrls: ['./listado-p.page.scss'],
})
export class ListadoPPage implements OnInit {
  arregloProductos: any;

  constructor(private db: BasededatosService, public router: Router) { }

  ngOnInit() {
    this.db.dbState().subscribe(res => {
      if (res) {
        this.db.fetchProducto().subscribe(item => {
          this.arregloProductos = item;
        })
      }
    })
  }

  modificar(a:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        codEnviado: a.cod_producto,
        productoEnviado: a.nombre_producto,
        emisionEnviado: a.f_emision,
        vencimientoEnviado: a.f_vencimiento,
        descripcionEnviado: a.descripcion_p,
        fotoEnviado: a.foto_p,
        precioEnviado: a.precio_p,
        stockEnviado: a.stock_p,
        tipo_p_id_tipoEnviado: a.tipo_p_id_tipo

      }
    }
    this.router.navigate(['/modificar-p'], navigationExtras);

  }

  eliminar(a:any){
    this.db.borrarProducto(a.cod_producto);
    this.db.presentToast("Producto Eliminado");

  }

}
