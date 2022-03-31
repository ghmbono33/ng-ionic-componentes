import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  personajes: string[] = ['Fleki', 'Solet', 'Bimba', 'Cova', 'Perico', 'Titi'];
  deshabilitarReorden = false;
  icono = 'reorder-three-outline';
  constructor() {}

  ngOnInit() {}
  doReorder(event: any) {
    console.log(this.personajes);
    //Al mover el item el array de personajes no se actualiza, lo tenemos
    //que hacer manualmente.
    //Elimino el elemento movido => event.detail.from y como splice además
    //de eliminar devuelve los elementos eliminados cogemos el eliminado (el primero)
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    //Ahora insertamos itemMover en la posición correcta
    //splice: 1º parámetro es posición, 2º elementos a borrar, 3º elemento/s a añadir
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
    console.log(this.personajes);
  }
  toogleReorden() {
    //habilita/deshabilita el poner reordenar, además cambia el icono
    this.deshabilitarReorden = !this.deshabilitarReorden;
    if (!this.deshabilitarReorden) {
      this.icono =
        this.icono === 'reorder-three-outline'
          ? 'pizza'
          : 'reorder-three-outline';
    }
  }
}
