import { MediService } from './../services/medi.service';
import { Meds } from '../../models/medi';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  private authState: Observable<firebase.User>;
  public currentUser: firebase.User;
  loader=false;
  item:Meds={
    name:'',
    description:'',
    id:''
  }
  meds: Meds[];
  yes;
  user:firebase.User;
  constructor(private afs: AngularFirestore, private afAuth:AngularFireAuth,private mediService:MediService) { 
    this.authState = this.afAuth.authState;

    // this.authState.subscribe(user => {
    //   if (user) {
    //     this.currentUser = user;
    //     console.log('AUTHSTATE USER', user.uid); 
    //     this.mediService.getAlegs().valueChanges().subscribe(meds =>{
    //       //console.log(allegs);
    //     this.meds= meds;
    //   });
    //     //this works
        
    //   } else {
    //     console.log('AUTHSTATE USER EMPTY', user);
    //     this.currentUser = null;
    //   }
    // },
    // err => {
    //   console.log('Please try again')
    // });
  }

  ngOnInit(): void {
    console.log("hi")
    this.loader=true;
    this.authState.subscribe(user => {
      this.loader=true;
      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid); 
        this.mediService.getAlegs().valueChanges().subscribe(meds =>{
          //console.log(allegs);
        this.meds= meds;
      });
      this.getYes().subscribe(yes => {
        console.log(yes);
        this.yes = yes;
      });
        //this works
        
      } else {
        console.log('AUTHSTATE USER EMPTY', user);
        this.currentUser = null;
      }
      this.loader=false;
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
    if(this.item.name != '' && this.item.description != ''){
      this.item.id=this.currentUser.uid;
      this.mediService.addItem(this.item);
      this.item.name = '';
      this.item.description = '';
    }else{
      
    }
  }
  getYes() {
    return this.afs.collection('Healthpro').doc(this.currentUser.uid).valueChanges();
  }
}
