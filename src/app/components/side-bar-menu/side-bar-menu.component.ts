import { Component, OnInit, Input } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client.model';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styles: []
})
export class SideBarMenuComponent implements OnInit {

  client: Client = new Client('', '', '', '');
  form: FormGroup;

  constructor(public _clientService: ClientsService,
              public snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit() {
    // all the fields of the html that I want to control with this form
    this.form = new FormGroup({
      Nombre: new FormControl(null, Validators.required),
      Descripcion: new FormControl(null, [Validators.required]),
      Latitud: new FormControl(null, Validators.required),
      Longitud: new FormControl(null, Validators.required),
    });
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
