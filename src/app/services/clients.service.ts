import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(public http: HttpClient) { }

  getAllClients() {
    const clientsUrl = 'http://localhost:3000/clients';
    return this.http.get(clientsUrl)
              .pipe(map( (res: any) => res['clients']));
  }
}
