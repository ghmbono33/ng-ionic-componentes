import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  albums: any[];
  texto: string = '';
  // campo: string = 'title';
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums().subscribe((res) => (this.albums = res));
  }
  buscar(e: any) {
    this.texto = e.detail.value;
    // console.log(e.detail.value);
  }
}
