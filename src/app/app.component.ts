import { Component } from '@angular/core';
import { ClientsService } from './services/clients.service';
import { Client } from './models/client.model';
import swal from 'sweetalert2';


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

  saveNewClient(): void {
       this.newClient = this._clientService.newClient;
       // ahora muestro el marcador en azul inyecto este cliente en un nuevo marcador
       this._clientService.addNewClient(this.newClient)
                          .subscribe( (res: any) => {
                            this._clientService.newClient = null;
                            // mensaje de salvado correcto
                            // tslint:disable-next-line:max-line-length
                            swal('Clients Save', 'The clients have been saved in the database, the page is updated automatically', 'success');
                            setTimeout(() => {
                              this.refresh();
                            }, 4000);
                          });
  }

  refresh(): void {
    window.location.reload();
  }


}
