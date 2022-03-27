import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // No me deja hacer :  @Input() titulo: string = ""
  // el Lint me muestra el error: Type string trivially inferred from a string literal,
  //remove type annotation.eslint@typescript-eslint/no-inferrable-types
  //en cambio el código funciona correctamente

  @Input() titulo: string;
  constructor() {}
}
