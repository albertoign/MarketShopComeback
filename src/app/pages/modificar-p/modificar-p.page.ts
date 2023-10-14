import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-modificar-p',
  templateUrl: './modificar-p.page.html',
  styleUrls: ['./modificar-p.page.scss'],
})
export class ModificarPPage implements OnInit {
  codProducto = "";
  nombreProducto = "";
  fEmision = "";
  fVencimiento = "";
  descripcionP = "";
  fotoP = "";
  precioP = "";
  stockP = "";
  tipo_p_id_tipo = "";
  
  constructor(private router: Router, private activedRouter: ActivatedRoute, private db:BasededatosService) { 
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.codProducto = this.router.getCurrentNavigation()?.extras?.state?.['codEnviado'];
        this.nombreProducto = this.router.getCurrentNavigation()?.extras?.state?.['productoEnviado'];
        this.fEmision = this.router.getCurrentNavigation()?.extras?.state?.['emisionEnviado'];
        this.fVencimiento = this.router.getCurrentNavigation()?.extras?.state?.['vencimientoEnviado'];
        this.descripcionP = this.router.getCurrentNavigation()?.extras?.state?.['descripcionEnviado'];
        this.fotoP = this.router.getCurrentNavigation()?.extras?.state?.['fotoEnviado'];
        this.precioP = this.router.getCurrentNavigation()?.extras?.state?.['precioEnviado'];
        this.stockP = this.router.getCurrentNavigation()?.extras?.state?.['stockEnviado']
        this.tipo_p_id_tipo = this.router.getCurrentNavigation()?.extras?.state?.['tipo_p_id_tipoEnviado']
      }
    })
  }

  ngOnInit() {
  }

  editar(){
    this.db.actualizarProducto(this.codProducto,this.nombreProducto,this.fEmision,this.fVencimiento,this.descripcionP,this.fotoP,this.precioP,this.stockP,this.tipo_p_id_tipo);
    this.db.presentToast("Producto Actualizado");
    this.router.navigate(['/listado-p']);
  }
}
