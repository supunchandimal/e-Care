import { HealthprofileComponent } from './../healthprofile/healthprofile.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagemenu',
  templateUrl: './pagemenu.component.html',
  styleUrls: ['./pagemenu.component.css']
})
export class PagemenuComponent implements OnInit {

 
  constructor() { }

  @Input() public parentData;
  ngOnInit(): void {
  }

}
