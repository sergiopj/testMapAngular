import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Client } from '../models/client.model';
import { URL_SERVICES } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  @Output() change: EventEmitter<Client> = new EventEmitter();

  public newClient: Client;

  constructor(public http: HttpClient) { }

  getAllClients() {
    const clientsUrl = `${URL_SERVICES}/clients`;
    return this.http.get(clientsUrl)
                    .pipe(map( (res: Client) => res['clients']));
  }

  showNewClient (client: Client) {
    console.log('client ', client);
    this.newClient = client;
    this.change.emit(this.newClient);
  }

  addNewClient(client: Client) {
    const newClientUrl = `${URL_SERVICES}/clients/new`;
    return this.http.post(newClientUrl, client)
                    .pipe(map( (res: Client) => {
                      this.newClient = res['client'];
                      return this.newClient;
                  }));

  }
}
