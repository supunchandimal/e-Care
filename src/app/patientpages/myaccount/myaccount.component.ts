import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
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
  flag = 5;
  MedCollection: AngularFirestoreCollection<User>;
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
  
  meds;
  constructor(private auth:AuthService,private afAuth:AngularFireAuth,private accountService:AccountService,public afsal:AngularFirestore) { 
    this.authState = this.afAuth.authState;
    
  }
  
  ngOnInit(): void {
    console.log("hi")
    this.auth.getUserState()
      .subscribe(user =>{
        this.user = user;
      });
    this.authState.subscribe(user => {
      
      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid); 
        this.getYes().subscribe(meds =>{
          //console.log(allegs);
        this.meds= meds;
        this.item.phone = this.meds.phone;
         
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
      
    }else{
      
    }
  }
  public mark =1;

  onClickAD(){
    this.mark =1;
  }
  onClickLP(){
    this.mark =2;
  }
  onClickBD(){
    this.mark =3;
  }
  getYes() {
    return this.afsal.collection('Users').doc(this.currentUser.uid).valueChanges();
  }
 
}


