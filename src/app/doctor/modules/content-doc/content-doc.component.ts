import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-doc',
  templateUrl: './content-doc.component.html',
  styleUrls: ['./content-doc.component.css']
})
export class ContentDocComponent implements OnInit {
  today: number = Date.now();
  edit : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
