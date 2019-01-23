import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styles: []
})
export class SideBarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeForm(): void {
    document.getElementById('myForm').style.display = 'none';
  }

  createNewClient(form) {
    // recoger el cliente, llamar a servicio de insercion y refrescar la pintada
    // en el mapa con marcador de otro color se guarda y se salva en la bd
  }

}
