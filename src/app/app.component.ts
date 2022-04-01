import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  componentes: Observable<Componente[]>;

  constructor(
    private ds: DataService // private menuController: MenuController
  ) {}
  ngOnInit(): void {
    this.componentes = this.ds.getMenuOpts();
  }
  // Otra forma de cerrar el menú sin utilizar el ion-menu-toggle
  // cerrarMenu() {
  //   this.menuController.close('menuPrincipal');
  // }
}
