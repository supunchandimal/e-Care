import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-patient-default-page',
  templateUrl: './patient-default-page.component.html',
  styleUrls: ['./patient-default-page.component.css'],

})
export class PatientDefaultPageComponent implements OnInit {
 user:firebase.User;
  constructor(private auth:AuthService,private router:Router) { }
    
  
  ngOnInit(): void {
    this.auth.getUserState()
      .subscribe(user =>{
        this.user = user;
      })
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/home']);
  }

}
