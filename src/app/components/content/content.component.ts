import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() formulario = true;
  dataSource = ELEMENT_DATA;
}
export interface Alumnos {
  alumno: { nombres: string; apellidos: string };
  editar: boolean;
  asistencias: number;
}

const ELEMENT_DATA: Alumnos[] = [
  {
    alumno: { apellidos: 'Ballon Fox', nombres: 'Gabriel' },
    editar: false,
    asistencias: 8,
  },
  {
    alumno: { apellidos: 'Ballon Fox', nombres: 'Camila' },
    editar: false,
    asistencias: 7,
  },
  {
    alumno: { apellidos: 'Ballon Fox', nombres: 'Julia' },
    editar: false,
    asistencias: 6,
  },
  {
    alumno: { apellidos: 'Fox Joo', nombres: 'Cecilia' },
    editar: false,
    asistencias: 9,
  },
  {
    alumno: { apellidos: 'Ballon Soria', nombres: 'Gabriel' },
    editar: false,
    asistencias: 8,
  },
  {
    alumno: { apellidos: 'Alca Montoya', nombres: 'Aylin' },
    editar: false,
    asistencias: 9,
  },
  {
    alumno: { apellidos: 'Macalupú', nombres: 'Valeria' },
    editar: false,
    asistencias: 7,
  },
];
