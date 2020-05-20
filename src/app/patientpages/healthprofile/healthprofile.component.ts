import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-healthprofile',
  templateUrl: './healthprofile.component.html',
  styleUrls: ['./healthprofile.component.css']
})
export class HealthprofileComponent implements OnInit {

  constructor() { }

 public flag =1;

  ngOnInit(): void {
  }

}
