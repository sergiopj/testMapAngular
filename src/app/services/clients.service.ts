import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  @Output() change: EventEmitter<Client> = new EventEmitter();

  public newClient: Client;

  constructor(public http: HttpClient) { }

  getAllClients() {
    const clientsUrl = 'http://localhost:3000/clients';
    return this.http.get(clientsUrl)
                    .pipe(map( (res: Client) => res['clients']));
  }

  addNewClient(client: Client) {
    console.log('Test ', client);
    const newClientUrl = 'http://localhost:3000/clients/new';
    return this.http.post(newClientUrl, client)
                    .pipe(map( (res: Client) => {
                      this.newClient = res['client'];
                      this.change.emit(this.newClient);
                      return this.newClient;
                  }));

  }
}
