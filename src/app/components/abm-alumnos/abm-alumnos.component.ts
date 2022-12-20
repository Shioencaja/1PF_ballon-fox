import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css'],
})
export class AbmAlumnosComponent implements OnInit {
  onSubmit() {
    console.log('enviando'), this.formularioABM.reset();
  }
  constructor(public fb: FormBuilder) {}
  formularioABM = this.fb.group({
    nombres: [''],
    apellidos: [''],
  });
  ngOnInit(): void {}
}
