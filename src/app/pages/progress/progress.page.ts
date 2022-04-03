import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  porcentaje = 0.33;
  constructor() {}

  ngOnInit() {}
  rangeChange(e: any) {
    console.log(e.detail.value);
    //cambiamos el porcentaje, que en lugar de 0 a 100 va de 0 a 1
    this.porcentaje = e.detail.value / 100;
  }
}
