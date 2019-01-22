import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: []
})
export class MapComponent implements OnInit {

  markers: Client[] = [];

  lat = 41.9860072;
  lng = -4.5649220;

  constructor(public _clientsService: ClientsService) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this._clientsService.getAllClients()
        .subscribe( clients => {
          console.log('Clients ', clients);
          this.markers = clients;
          console.log('Markers ', this.markers);
        });
  }

}
