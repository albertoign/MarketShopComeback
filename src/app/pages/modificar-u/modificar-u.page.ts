import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-modificar-u',
  templateUrl: './modificar-u.page.html',
  styleUrls: ['./modificar-u.page.scss'],
})
export class ModificarUPage implements OnInit {
  idUsuario = "";
  nombreUsuario = "";
  apellidoUsuario = "";
  telefonoUsuario = "";
  direccionUsuario = "";
  correoUsuario = "";
  claveUsuario = "";
  rol_id_rol = "";

  constructor(private router: Router, private activedRouter: ActivatedRoute, private db:BasededatosService) { 
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.idUsuario = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];
        this.nombreUsuario = this.router.getCurrentNavigation()?.extras?.state?.['nombreEnviado'];
        this.apellidoUsuario = this.router.getCurrentNavigation()?.extras?.state?.['apellidoEnviado'];
        this.telefonoUsuario = this.router.getCurrentNavigation()?.extras?.state?.['telefonoEnviado'];
        this.direccionUsuario = this.router.getCurrentNavigation()?.extras?.state?.['direccionEnviado'];
        this.correoUsuario = this.router.getCurrentNavigation()?.extras?.state?.['correoEnviado'];
        this.claveUsuario = this.router.getCurrentNavigation()?.extras?.state?.['claveEnviado'];
        this.rol_id_rol = this.router.getCurrentNavigation()?.extras?.state?.['rol_id_rolEnviado']
      }
    })
  }

  ngOnInit() {
  }


  editar(){
    this.db.actualizarUsuario(this.idUsuario,this.nombreUsuario,this.apellidoUsuario,this.telefonoUsuario,this.direccionUsuario,this.correoUsuario,this.claveUsuario,this.rol_id_rol);
    this.db.presentToast("Usuario Actualizado");
    this.router.navigate(['/listado-u']);
  }
}
