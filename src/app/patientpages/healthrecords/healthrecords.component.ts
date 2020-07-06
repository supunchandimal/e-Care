import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthrecords',
  templateUrl: './healthrecords.component.html',
  styleUrls: ['./healthrecords.component.css']
})
export class HealthrecordsComponent implements OnInit {

  constructor() { }
  public flag2 =2;
  ngOnInit(): void {
  }
  public mark = 1;

  onClickAlleg(){
    this.mark=1;
  }
  onClickMedic(){
    this.mark=2;
  }
  onClickRecord(){
    this.mark=3;
  }
  onClickOpo(){
    this.mark=4;
  }
}
