import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.scss']
})
export class MenuNavegacionComponent {
  activeItem: string = 'home';

  setActive(item: string) {
    this.activeItem = item;
  }
}