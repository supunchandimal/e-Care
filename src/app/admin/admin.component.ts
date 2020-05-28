import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // sidebar: any;
isCollapsed : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  // togglemenu(){
  //   document.getElementById('sidebar').classList.toggle('active');
  // }
//   toggleClick() {
//     this.sidebar.toggle();
// }
toggleCollapse(){
  this.isCollapsed= !this.isCollapsed;
}
}
