
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  private authState: Observable<firebase.User>;
  public currentUser: firebase.User;
  user:firebase.User;
  item:User={
    firstname:'',
    secondname:'',
    email:'',
    phone:'',
    dob:'',
    id:''
  }
  meds: User[];
  constructor(private auth:AuthService,private afAuth:AngularFireAuth,private accountService:AccountService) { 
    this.authState = this.afAuth.authState;
  }

  ngOnInit(): void {
    console.log("hi")
  
    this.authState.subscribe(user => {
      
      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid); 
        this.accountService.getAlegs().valueChanges().subscribe(meds =>{
          //console.log(allegs);
        this.meds= meds;
      });
        //this works
        
      } else {
        console.log('AUTHSTATE USER EMPTY', user);
        this.currentUser = null;
      }
      
    },
    err => {
      console.log('Please try again')
    });

    // this.mediService.getAlegs().valueChanges().subscribe(meds =>{
    //     //console.log(allegs);
    //   this.meds= meds;
    // });
  }
  onSubmit(){
    if(this.item.firstname != '' && this.item.secondname != '' ){
      this.item.id=this.currentUser.uid;
      this.accountService.addItem(this.item);
      this.item.addr = '';
      this.item.phone = '';
      this.item.emercntct = '';
    }else{
      
    }
  }
}
