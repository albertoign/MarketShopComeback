import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-agregar-t',
  templateUrl: './agregar-t.page.html',
  styleUrls: ['./agregar-t.page.scss'],
})
export class AgregarTPage implements OnInit {
  nombre_tipo_p= "";

  constructor(public router:Router, private db: BasededatosService) { }

  ngOnInit() {
  }


  insertarTipo(){
    this.db.insertarTipoP(this.nombre_tipo_p );
    this.db.presentToast("Tipo de Prdoucto Agregado");
    this.router.navigate(['/tipo-p']);
  }
}
