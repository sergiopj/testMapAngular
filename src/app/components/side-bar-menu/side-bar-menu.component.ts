import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styles: []
})
export class SideBarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeForm(): void {
    document.getElementById('myForm').style.display = 'none';
  }

}
