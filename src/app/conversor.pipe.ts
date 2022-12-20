import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversor',
})
export class ConversorPipe implements PipeTransform {
  transform(alumno: string, nombre: string, apellido: string): string {
    return `${apellido} ${nombre}`;
  }
}
