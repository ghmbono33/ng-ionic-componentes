import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading: HTMLIonLoadingElement;
  constructor(private loadingController: LoadingController) {}

  ngOnInit() {}
  mostrarLoading(texto: string) {
    // mostramos el loading
    this.presentLoading(texto);
    // A los 2 segundos lo finalizamos, simula la carga de datos
    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }
  // texto copiado de https://ionicframework.com/docs/api/loading
  async presentLoading(message: string) {
    this.loading = await this.loadingController.create({
      message,
    });
    await this.loading.present();
  }
}
