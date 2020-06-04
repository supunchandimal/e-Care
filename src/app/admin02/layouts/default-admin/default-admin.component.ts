import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-admin',
  templateUrl: './default-admin.component.html',
  styleUrls: ['./default-admin.component.css']
})
export class DefaultAdminComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
