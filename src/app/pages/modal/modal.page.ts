import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}
  async mostrarModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        //Las props que le pasamos al hijo (modalInfo)
        nombre: 'Fleki',
        tipo: 'Gloster',
      },
      // cssClass: 'my-custom-class',
    });
    await modal.present();
    // Obtenemos los datos del hijo (modalInfo), se muestra una vez se ha
    //cerrado el modal
    const resp = await modal.onDidDismiss();
    //Se puede utilizar en su lugar onWillDismiss, se muestra incluso antes
    //de cerral el modal
    // const resp = await modal.onWillDismiss();
    console.log(resp);
  }
}
