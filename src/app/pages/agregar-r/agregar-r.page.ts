import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-agregar-r',
  templateUrl: './agregar-r.page.html',
  styleUrls: ['./agregar-r.page.scss'],
})
export class AgregarRPage implements OnInit {

  nombre_rol = "";
  constructor(public router: Router, private db: BasededatosService) { }

  ngOnInit() {
  }

  insertarRol(){
    this.db.insertarRol(this.nombre_rol);
    this.db.presentToast("Rol Agregado");
    this.router.navigate(['/listado-r']);
  }
}
