import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../../models/user';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AccountService } from '../services/account.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {
  
  @ViewChild('secondDialog') secondDialog: TemplateRef<any>;
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
  constructor(private auth:AuthService,private afAuth:AngularFireAuth,private accountService:AccountService,public afsal:AngularFirestore,private dialog: MatDialog) { 
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
          console.log(this.item.addr);
        this.meds= meds;
        this.item.phone = this.meds.phone;
        this.item.emercntct = this.meds.emercntct;
        this.item.addr = this.meds.addr;
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
   
      this.item.id=this.currentUser.uid;
      this.item.firstname=this.meds.firstname;
      this.item.secondname=this.meds.secondname;
      this.item.email=this.meds.email;
      this.item.dob=this.meds.dob;
      this.item.gender=this.meds.gender;
      this.accountService.addItem(this.item);
      
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
  openOtherDialog() {
    this.dialog.open(this.secondDialog);
  }
 
}


