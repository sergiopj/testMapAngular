import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styles: []
})
export class SideBarMenuComponent implements OnInit {

  client: Client = new Client('', '', '', '');

  constructor(public _clientService: ClientsService) { }

  ngOnInit() {
  }

  closeForm(): void {
    document.getElementById('myForm').style.display = 'none';
  }

showNewClient (form) {
  console.log('FORMMMS ', form);
  if (form.invalid) {
    return;
  }
  this._clientService.showNewClient(this.client);
  // aparece el modal de aceptacion
}

}
