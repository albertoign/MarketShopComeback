import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-tipo-p',
  templateUrl: './tipo-p.page.html',
  styleUrls: ['./tipo-p.page.scss'],
})
export class TipoPPage implements OnInit {
  arregloTipo: any;

  constructor(private db: BasededatosService, public router: Router) { }

  ngOnInit() {
    //me subscribo al observable del status de la BD
    this.db.dbState().subscribe(res=>{
      //si esta lista la BD
      if(res){
        //me subscribo al observable de las noticias
        this.db.fetchTipo().subscribe(item=>{
          this.arregloTipo = item;
        })
      }
    })
  }


  modificar(x:any) {
    let navigationExtras: NavigationExtras = {
      state: {
        idEnviado: x.id_tipo,
        nombretipoEnviado: x.nombre_tipo_p,
        
      }
    }
    this.router.navigate(['/modificar-t'], navigationExtras);

  }


  eliminar(x:any){
    this.db.borrarTipoP(x.id_tipo);
    this.db.presentToast("Tipo de Producto Eliminado");

  }
}
