import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  formulario = true;

  abrirFormulario(value: any) {
    this.formulario = value;
  }
  ngOnInit(): void {}
}
