import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-agregar-u',
  templateUrl: './agregar-u.page.html',
  styleUrls: ['./agregar-u.page.scss'],
})
export class AgregarUPage implements OnInit {
      
      nombreusuario= "";
      apellidousuario = "";
      telefonousuario = "";
      direccionusuario = "";
      correousuario = "";
      claveusuario = "";
      rol_id_rol = "";
      

  constructor(public router:Router, private db: BasededatosService) { }

  ngOnInit() {
  }

  insertarUsuario(){
    this.db.insertarUsuario(this.nombreusuario,this.apellidousuario, this.telefonousuario, this.direccionusuario, this.correousuario, this.claveusuario, this.rol_id_rol );
    this.db.presentToast("Usuario Agregado");
    this.router.navigate(['/listado-u']);
  }
}
