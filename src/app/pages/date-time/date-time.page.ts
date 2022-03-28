import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fecha: Date = new Date();
  // misAnyosValidos = [1971, 1974];  //Así también es válido
  misAnyosValidos = '1971, 1974';
  // Esto corresponde a la versión 5, estoy utilizando la 6
  // customPickerOptions = {
  //   buttons: [
  //     {
  //       text: 'Hola',
  //       handler: (event) => {
  //         console.log(event);
  //       },
  //     },
  //     {
  //       text: 'Mundo',
  //       handler: () => {
  //         console.log('log');
  //       },
  //     },
  //   ],
  // };
  constructor() {}
  get fechaDDMMYYYY() {
    const day = this.fecha.getDate();
    const month = this.fecha.getMonth() + 1;
    const year = this.fecha.getFullYear();

    if (month < 10) {
      return `${day}-0${month}-${year}`;
    } else {
      return `${day}-${month}-${year}`;
    }
  }

  ngOnInit() {}
  cambioDeFecha(evento) {
    console.log(evento);
    this.fecha = new Date(evento.detail.value);
  }
  confirm() {
    console.log('Confirmado');
  }
  reset() {
    console.log('reset');
  }
}
