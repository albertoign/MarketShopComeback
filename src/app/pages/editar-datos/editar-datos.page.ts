import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-datos',
  templateUrl: './editar-datos.page.html',
  styleUrls: ['./editar-datos.page.scss'],
})
export class EditarDatosPage implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      celular: ['', Validators.required],
      direccion: ['', Validators.required],
      comuna: ['', Validators.required],
    });
  }
 
  ngOnInit() {
  }

}
