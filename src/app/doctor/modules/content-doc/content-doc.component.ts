import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-doc',
  templateUrl: './content-doc.component.html',
  styleUrls: ['./content-doc.component.css']
})
export class ContentDocComponent implements OnInit {
  today: number = Date.now();
  minDate: Date;
  maxDate: Date;
  t07 = true;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor() { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(this.today);
    this.maxDate = new Date(currentYear + 1, 11, 31);}

  ngOnInit(): void {
  }

}
