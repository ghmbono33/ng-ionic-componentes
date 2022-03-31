import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Observable<Componente[]>;

  // Si utilizaramos la forma más complicada de mostrar el menú
  // constructor(private menuController: MenuController) {}

  // Si utilizaramos la forma más complicada de mostrar el menú
  // ngOnInit() {}
  // mostrarMenu() {
  //   // El menú está definido en app.component.html
  //   this.menuController.open('menuPrincipal');
  // }

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.componentes = this.dataService.getMenuOpts();
  }
}
