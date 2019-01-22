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

  lat: string;
  lng: string;

  constructor(public _clientsService: ClientsService) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this._clientsService.getAllClients()
        .subscribe( clients => {
          console.log('Clients ', clients);
          this.markers = clients;
          this.lat = this.markers[0].Latitud;
          this.lng = this.markers[0].Longitud;
          console.log('Markers ', this.markers);
        });
  }

}
