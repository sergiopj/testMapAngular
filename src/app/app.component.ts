import { Component } from '@angular/core';
import { ClientsService } from './services/clients.service';
import { Client } from './models/client.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientsFront';
  newClient: Client;

  constructor(public _clientService: ClientsService) {
  }

  saveNewClient() {
       this.newClient = this._clientService.newClient;
       console.log('Client to add', this.newClient);
       // ahora muestro el marcador en azul inyecto este cliente en un nuevo marcador
       this._clientService.addNewClient(this.newClient)
                          .subscribe( (res: any) => {
                            this._clientService.newClient = null;
                          });
  }
}
