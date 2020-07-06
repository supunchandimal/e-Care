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
import { Alleg } from '../../models/allergie';
import { ServiceService } from '../services/service.service';
import { MediService } from './../services/medi.service';
import { Meds } from '../../models/medi';
import { ConditionsService } from '../services/conditions.service';
import { Cond } from 'src/app/models/cond';
import { Opo } from 'src/app/models/opo';
import { OpoService } from '../services/opo.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
  private authState: Observable<firebase.User>;
  it: Cond = {
    name: '',
    description: '',
    id: ''
  }
  als;
  conds: Cond[];
  public currentUser: firebase.User;
  recs: Rec[];
  user: firebase.User;
  yes;
  constructor(private mediService: MediService, private afAuth: AngularFireAuth, private auth: AuthService, private router: Router, private service: HealthproService, private afs: AngularFirestore, private serviceService: ServiceService, private condService: ConditionsService, private opoService: OpoService) { 
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
     
      this.getCond().subscribe(als => {
        console.log(als);
        this.als = als;
      });
      this.service.getAlegs().valueChanges().subscribe(recs => {
        // console.log(recs);
        this.recs = recs;
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

  },
    err => {
      console.log('Please try again')
    });

  }
  getCond() {
    return this.afs.collection('Conds', ref => ref.where('id', '==', this.currentUser.uid)).valueChanges();
  }
  getYes() {
    return this.afs.collection('Healthpro').doc(this.currentUser.uid).valueChanges();
  }
}
