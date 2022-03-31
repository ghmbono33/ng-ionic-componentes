import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecTo: '/alert',
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirecTo: '/avatar',
    },
    {
      icon: 'radio-button-on-outline',
      name: 'Buttons',
      redirecTo: '/button',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirecTo: '/card',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirecTo: '/check',
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirecTo: '/date-time',
    },
    {
      icon: 'car-outline',
      name: 'fab',
      redirecTo: '/fab',
    },
    {
      icon: 'grid-outline',
      name: 'grid',
      redirecTo: '/grid',
    },
    {
      icon: 'infinite-outline',
      name: 'Ininite-Scroll',
      redirecTo: '/infinite',
    },
    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirecTo: '/input',
    },
    {
      icon: 'list-outline',
      name: 'List - Sliding',
      redirecTo: '/list',
    },
    {
      icon: 'reorder-three-outline',
      name: 'List - Reorder',
      redirecTo: '/list-reorder',
    },
    {
      icon: 'refresh-circle-outline',
      name: 'Loading',
      redirecTo: '/loading',
    },
  ];
  constructor(private menuController: MenuController) {}

  ngOnInit() {}
  // mostrarMenu() {
  //   // El menú está definido en app.component.html
  //   this.menuController.open('menuPrincipal');
  // }
}
