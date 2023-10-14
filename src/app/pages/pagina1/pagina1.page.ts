import { animate, animation, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Componente1Component } from 'src/app/components/componente1/componente1.component';
Componente1Component



@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  formularioLogin: any;
  public alertButtons = ['Seguro']; 

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtr: NavController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    }) }

  ngOnInit(): void {
  }
  fadeAnimation = animation([
    style({ opacity: '{{ start }}' }),
    animate('{{ time }}',
    style({ opacity: '{{ end }}'}))
    ],
    { params: { time: '1000ms', start: 0, end: 1 }});

    async ingresar() {
      var f = this.formularioLogin.value;
      var usuarioString = localStorage.getItem('usuario');
      if (usuarioString !== null) {
        var usuario = JSON.parse(usuarioString);
        if (usuario.nombre == f.nombre && usuario.password == f.password) {
          console.log('Ingresado');
          localStorage.setItem('ingresado', 'true');
          this.navCtr.navigateRoot('pagina1');
        } else {
          const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'Ingrese correctamente sus datos',
            buttons: ['Aceptar'],
          });
          await alert.present();
        }
      } else {
        
      }
      }
}
