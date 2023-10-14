import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasededatosService } from 'src/app/services/basededatos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  productos: any;
  constructor(private db: BasededatosService, public router: Router) { }

  ngOnInit() {
    this.db.dbState().subscribe(res => {
      if (res) {
        this.db.fetchProducto().subscribe(item => {
          this.productos = item;
        })
      }
    })
  }

}
