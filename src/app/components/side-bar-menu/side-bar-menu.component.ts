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

  createNewClient(form) {
    if (form.invalid) {
      return;
    }

    console.log('Form ', form);
    console.log('Client ', this.client);

    // ahora muestro el marcador en azul inyecto este cliente en un nuevo marcador 


    this._clientService.addNewClient(this.client)
                       .subscribe( (res: any) => {
                         console.log('res ', res);
                         // añadir cliente al marcador
                         this._clientService.newClient = res;
                         console.log('New vlient ', this._clientService.newClient);
                       });
  }

}
