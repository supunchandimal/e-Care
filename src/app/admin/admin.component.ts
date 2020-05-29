import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

isCollapsed : boolean = true;
  constructor(private route: ActivatedRoute, private router: Router) { }

  toggleCollapse(){
    this.isCollapsed= !this.isCollapsed;
  }

  showdoctors(){
    this.router.navigate(['manage-doctor'], {relativeTo: this.route});
  }
  
  ngOnInit(): void {
  }



}
