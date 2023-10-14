import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-modificar-t',
  templateUrl: './modificar-t.page.html',
  styleUrls: ['./modificar-t.page.scss'],
})
export class ModificarTPage implements OnInit {

  idTipo = "";
  nombreTipo = "";

  constructor(private router: Router, private activedRouter: ActivatedRoute, private db: BasededatosService) { 
    this.activedRouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.idTipo = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];

        this.nombreTipo = this.router.getCurrentNavigation()?.extras?.state?.['nombretipoEnviado'];


      }
    })
  }

  ngOnInit() {
  }


  editar(){
    this.db.actualizarTipoP(this.idTipo,this.nombreTipo);
    this.db.presentToast("Tipo de Producto Actualizado");
    this.router.navigate(['/tipo-p']);
  }

}
