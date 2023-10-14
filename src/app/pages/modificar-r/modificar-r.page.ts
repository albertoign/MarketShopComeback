import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-modificar-r',
  templateUrl: './modificar-r.page.html',
  styleUrls: ['./modificar-r.page.scss'],
})
export class ModificarRPage implements OnInit {
  id_rol = "";
  nombre_rol = "";

  constructor(private router: Router, private activedRouter: ActivatedRoute, private db: BasededatosService) {
    this.activedRouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.id_rol = this.router.getCurrentNavigation()?.extras?.state?.['id_rolEnviado'];

        this.nombre_rol = this.router.getCurrentNavigation()?.extras?.state?.['nombre_rolEnviado'];


      }
    })
  }

  ngOnInit() {
  }


  editar() {
    this.db.actualizarRol(this.id_rol, this.nombre_rol);
    this.db.presentToast("Rol Actualizado");
    this.router.navigate(['/listado-r']);
  }
}
