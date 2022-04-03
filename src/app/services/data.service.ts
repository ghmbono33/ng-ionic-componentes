import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, Heroe } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getMenuOpts() {
    // Cargamos las opciones del menú
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }
  getAlbums(): Observable<any> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getHeroes(): Observable<Heroe[]> {
    // Cargamos los superheroes, el tipado se lo he puesto yo
    return this.http
      .get<Heroe[]>('/assets/data/superheroes.json')
      .pipe(delay(1500));
  }
}
