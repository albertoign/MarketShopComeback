import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-listado-u',
  templateUrl: './listado-u.page.html',
  styleUrls: ['./listado-u.page.scss'],
})
export class ListadoUPage implements OnInit {

  arregloUsuarios: any;

  constructor(private db: BasededatosService, public router: Router) { }

  ngOnInit() {

    this.db.dbState().subscribe(res => {
      if (res) {
        this.db.fetchUsuario().subscribe(item => {
          this.arregloUsuarios = item;
        })
      }
    })
  }
  modificar(a:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        idEnviado: a.id_usuario,
        nombreEnviado: a.nombre_usuario,
        apellidoEnviado: a.apellido_usuario,
        telefonoEnviado: a.telefono_usuario,
        direccionEnviado: a.direccion_usuario,
        correoEnviado: a.correo_usuario,
        claveEnviado: a.clave_usuario,
        rol_id_rolEnviado: a.rol_id_rol
      }
    }
    this.router.navigate(['/modificar-u'], navigationExtras);

  }

  eliminar(a:any){
    this.db.eliminarUsuario(a.id_usuario);
    this.db.presentToast("Usuario Eliminado");

  }
}
