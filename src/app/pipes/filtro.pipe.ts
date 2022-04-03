import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(arreglo: any[], texto: string = '', campo: string): any[] {
    // Pipe que si el campo de búsqueda es título muestra aquellas entradas
    // entradas que el título contenga el  texto y si el id aquellas cuyo id
    // coincida con el texto introducido
    console.log(campo);
    if (texto === '' || !arreglo) {
      return arreglo;
    }
    if (campo === 'id') {
      return arreglo.filter((el) => el[campo] == texto);
    }
    return arreglo.filter((el) =>
      el[campo].toLowerCase().includes(texto.toLowerCase())
    );
  }
}
