import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-agregar-p',
  templateUrl: './agregar-p.page.html',
  styleUrls: ['./agregar-p.page.scss'],
})
export class AgregarPPage implements OnInit {

  nombreproducto = "";
  fechaemision = "";
  fechavencimiento = "";
  descripcion = "";
  foto = "";
  precio = "";
  stock = "";
  tipo_p_id_tipo = "";

  constructor(public router:Router, private db: BasededatosService) { }

  ngOnInit() {
  }

  insertarProducto(){
    this.db.insertarProducto(this.nombreproducto,this.fechaemision, this.fechavencimiento, this.descripcion, this.foto, this.precio, this.stock,this.tipo_p_id_tipo );
    this.db.presentToast("Producto Agregado");
    this.router.navigate(['/listado-u']);
  }

}
