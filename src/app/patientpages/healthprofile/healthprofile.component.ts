import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-healthprofile',
  templateUrl: './healthprofile.component.html',
  styleUrls: ['./healthprofile.component.css']
})
export class HealthprofileComponent implements OnInit {

  user:firebase.User;
  id:string;
  constructor(private auth:AuthService,private router:Router) { }
    
  public flag = 1;

  ngOnInit(): void {
    this.auth.getUserState()
      .subscribe(user =>{
        this.user = user;
      })

    
      
  }
  public mark = 1;

  onClickhealth(){
    this.mark=1;
  }
  onClickbehavirol(){
    this.mark=2;
  }
  onClickfamily(){
    this.mark=3;
  }

}
