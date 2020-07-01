
import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  authError: any;
  constructor(private auth: LoginserviceService) { }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe( data => {

      if(data){
        this.authError = "username or password wrong";
        
      }
      
    });
  }

  login(frm) {
    console.log(frm.value)
    this.auth.login(frm.value.email, frm.value.password);
  }
  

}
