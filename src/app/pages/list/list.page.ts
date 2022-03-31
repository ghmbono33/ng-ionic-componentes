import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  // apuntamos al <ion-list> del archivo html
  @ViewChild(IonList) ionList: IonList;
  usuarios: Observable<any>;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }
  favorite(user: any) {
    console.log('favorite', user);
    this.ionList.closeSlidingItems(); //cerramos el sliding
  }
  share(user: any) {
    console.log('share', user);
    this.ionList.closeSlidingItems(); //cerramos el sliding
  }
  delete(user: any) {
    console.log('delete', user);
    this.ionList.closeSlidingItems(); //cerramos el sliding
  }
}
