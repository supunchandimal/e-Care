import { from, Observable } from 'rxjs';
import { HealthproService } from '../../services/healthpro.service';
import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Appoinments } from '../../../models/appoinments';


@Component({
  selector: 'app-booked',
  templateUrl: './booked.component.html',
  styleUrls: ['./booked.component.css']
})
export class BookedComponent implements OnInit {
  private authState: Observable<firebase.User>;
  user: firebase.User;
  public currentUser: firebase.User;
  appoins;
  flag = 9;
  constructor( private afAuth: AngularFireAuth, private auth: AuthService, private router: Router, private service: HealthproService, private afs: AngularFirestore, ) {
    this.authState = this.afAuth.authState;
   }

  ngOnInit(): void {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
      });
   
    this.authState.subscribe(user => {

      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid);


        this.afs.collection('ppic').doc(this.currentUser.uid).get().toPromise().then((docSnapshot) => {
          if (docSnapshot.exists) {
            this.getApp().subscribe(appoins => {
              console.log(appoins);
              this.appoins = appoins;
            });
          }
         
        });
       
     

      } else {
        console.log('AUTHSTATE USER EMPTY', user);
        this.currentUser = null;
        
      }

    },
      err => {
        console.log('Please try again');
       
      });
  }
  getApp() {
    return this.afs.collection('Appoinments', ref => ref.where('userId', '==', this.currentUser.uid)).valueChanges();
  }
  
  joinVideo(channelID){
    console.log(channelID);
    localStorage.setItem("patient_appointmentID",channelID);
  }

}
