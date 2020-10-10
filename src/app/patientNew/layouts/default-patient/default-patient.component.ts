import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-patient',
  templateUrl: './default-patient.component.html',
  styleUrls: ['./default-patient.component.css']
})
export class DefaultPatientComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}