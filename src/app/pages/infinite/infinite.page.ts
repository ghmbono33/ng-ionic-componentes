import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data: any = Array(20);
  constructor() {}

  ngOnInit() {}
  cargarDatos(event: any) {
    console.log(event);
    setTimeout(() => {
      if (this.data.length > 70) {
        //Dejamos de cargar más elementos
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      //Vamos a simular que se cargan 20 elementos más
      const nuevoArray = Array(20);
      this.data.push(...nuevoArray);
      // event.target.complete(); //Fianliza el infinite
      this.infiniteScroll.complete();
    }, 1000);
  }
}
