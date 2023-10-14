import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { BasededatosService } from '../services/basededatos.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public FormBuilder: FormBuilder,
    public alertController: AlertController,
    public navCtr: NavController,public bd: BasededatosService,private router: Router) {

    this.formularioLogin = this.FormBuilder.group({
      'nombre': ['', Validators.required],
      'password': ['', Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]
    })
  }

  ngOnInit() {
  }
  
  async ingresar() {
    const f = this.formularioLogin.value;
  
    // Verifica si los campos están vacíos
    if (!f.nombre || !f.password) {
      this.bd.presentAlert('Por favor, ingrese correo y contraseña.');
      return;  // Detiene la ejecución de la función si los campos están vacíos
    }
  
    try {
      const rolId = await this.bd.iniciarSesion(f.nombre, f.password);
  
      if (rolId === null) {
        this.bd.presentAlert('Credenciales incorrectas');
      } else {
        const rolNumber = +rolId; // Convierte a número (si es un string)
  
        if (rolNumber === 1) {
          // Administrador
          localStorage.setItem('rol', 'administrador');
          this.router.navigate(['/vista-admin']);
        } else if (rolNumber === 2) {
          // Usuario
          localStorage.setItem('rol', 'usuario');
          this.router.navigate(['/pagina1']);
        } else {
          this.bd.presentAlert('Rol no reconocido');
        }
      }
    } catch (error) {
      this.bd.presentAlert('Error al iniciar sesión: ' + error);
    }
  }

  async ingresarAdmin() {
    var f = this.formularioLogin.value;
    var usuarioString = localStorage.getItem('usuario');
    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.navCtr.navigateRoot('vista-admin');
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


