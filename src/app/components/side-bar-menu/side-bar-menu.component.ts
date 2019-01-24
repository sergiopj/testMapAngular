import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client.model';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';




@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styles: []
})
export class SideBarMenuComponent implements OnInit {

  client: Client = new Client('', '', '', '');

  constructor(public _clientService: ClientsService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit() {
  }

  closeForm(): void {
    document.getElementById('myForm').style.display = 'none';
  }

  showNewClient (form) {

    if (form.invalid) {
      return;
    }
    this._clientService.showNewClient(this.client);
  }

}
