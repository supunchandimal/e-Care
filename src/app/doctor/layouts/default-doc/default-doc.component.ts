import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-doc',
  templateUrl: './default-doc.component.html',
  styleUrls: ['./default-doc.component.css']
})
export class DefaultDocComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}