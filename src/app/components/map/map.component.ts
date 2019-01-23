import { Component, OnInit, OnChanges, Output } from '@angular/core';
import { Client } from '../../models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: []
})
export class MapComponent implements OnInit{

  markers: Client[] = [];

  lat: string;
  lng: string;

  constructor(public _clientsService: ClientsService) { }

  ngOnInit() {
    this.getAllClients();
    this._clientsService.change.subscribe(
      res => console.log('yeaggg ', res )
    );
  }


  getAllClients(): void {
    this._clientsService.getAllClients()
        .subscribe( clients => {
          this.markers = clients;
          this.lat = this.markers[0].Latitud;
          this.lng = this.markers[0].Longitud;
          console.log('Markers ', this.markers);
        });
  }

  openMenu(): void {
    document.getElementById('myForm').style.display = 'block';
    // insert new client 
  }



}
