import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myproviders',
  templateUrl: './myproviders.component.html',
  styleUrls: ['./myproviders.component.css']
})
export class MyprovidersComponent implements OnInit {

  firstNameAutofilled: boolean;

  constructor() { }
  public flag3=3;
  ngOnInit(): void {
  }

}
