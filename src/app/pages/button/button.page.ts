import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
  iconoCorazon = 'heart';
  constructor() {}
  ngOnInit() {}
  onClick() {
    this.iconoCorazon =
      this.iconoCorazon === 'heart' ? 'heart-outline' : 'heart';
  }
}
