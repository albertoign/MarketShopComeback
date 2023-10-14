import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-listado-r',
  templateUrl: './listado-r.page.html',
  styleUrls: ['./listado-r.page.scss'],
})
export class ListadoRPage implements OnInit {

  arregloRoles: any;
    
  constructor(private db: BasededatosService, public router: Router) { }

  ngOnInit() {
    //me subscribo al observable del status de la BD
    this.db.dbState().subscribe(res=>{
      //si esta lista la BD
      if(res){
        //me subscribo al observable de las noticias
        this.db.fetchRol().subscribe(item=>{
          this.arregloRoles = item;
        })
      }
    })
  }


  modificar(x:any){
    let navigationExtras: NavigationExtras = {
      state: {
        id_rolEnviado: x.id_rol,
        nombre_rolEnviado: x.nombre_rol
        
      }
    }
    this.router.navigate(['/modificar-r'], navigationExtras);
  }

  eliminar(x:any){
    this.db.borrarRol(x.id_rol);
    this.db.presentToast("Rol Eliminado");

  }

}
