import { from, Observable } from 'rxjs';
import { Ppic } from './../../models/propic';
import { Rec } from './../../models/healthpro';
import { HealthproService } from './../services/healthpro.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-healthprofile',
  templateUrl: './healthprofile.component.html',
  styleUrls: ['./healthprofile.component.css']
})
export class HealthprofileComponent implements OnInit {
  private authState: Observable<firebase.User>;
  changingimg:boolean;
  files : FileList;
  upload : Ppic;
  item:Rec={
    allergies:'',
    operations:'',
    medication:'',
    conditions:''
  }
  recs: Rec[];
  user:firebase.User;
id:string;
allegs;

public currentUser: firebase.User;
  constructor(private afAuth:AngularFireAuth,private auth:AuthService,private router:Router,private service:HealthproService,private afs: AngularFirestore) { 
    this.authState = this.afAuth.authState;
  }
    
  public flag = 1;
  public ans = '';
  
  ngOnInit(): void {
    this.auth.getUserState()
      .subscribe(user =>{
        this.user = user;
      });
      this.service.getAlegs().valueChanges().subscribe(recs =>{
       // console.log(recs);
        this.recs= recs;
    });
    this.authState.subscribe(user => {
      
      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid); 
        this.getPpic().subscribe(allegs =>{
          console.log(allegs);
        this.allegs= allegs;
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

  }
public  bmi: number;
  calc(frm){
    this.bmi=frm.value.weight/((frm.value.height/100)*(frm.value.height/100));
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

  onClickYesAlleg(){
    this.item.allergies="yes";
    this.service.addItem(this.item);
  }
  
  onClickNoAlleg(){
    this.item.allergies = 'No';
    this.service.addItem(this.item);
  }
  onClickYesMed(){
    this.item.medication="yes";
    this.service.addItem(this.item);
  }
  
  onClickNoMed(){
    this.item.medication = 'No';
    this.service.addItem(this.item);
  }
  onClickYesCond(){
    this.item.conditions="yes";
    this.service.addItem(this.item);
  }
  
  onClickNoCond(){
    this.item.conditions = 'No';
    this.service.addItem(this.item);
  }
  onClickYesOpo(){
    this.item.operations="yes";
    this.service.addItem(this.item);
  }
  
  onClickNoOpo(){
    this.item.operations = 'No';
    this.service.addItem(this.item);
  }
  changingImage(){
    this.changingimg = !this.changingimg;
  }
  getPpic(){
    return this.afs.collection('ppic').doc(this.currentUser.uid).valueChanges();
   }
}
