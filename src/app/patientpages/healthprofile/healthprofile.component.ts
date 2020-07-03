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
  selector: 'app-healthprofile',
  templateUrl: './healthprofile.component.html',
  styleUrls: ['./healthprofile.component.css']
})
export class HealthprofileComponent implements OnInit {
  private authState: Observable<firebase.User>;
  changingimg: boolean;
  files: FileList;
  upload: Ppic;
  ite: Meds = {
    name: '',
    description: '',
    id: ''
  }
  meds: Meds[];
  i: Opo = {
    name: '',
    date: '',
    id: ''
  }
  ops: Opo[];
  it: Cond = {
    name: '',
    description: '',
    id: ''
  }
  conds: Cond[];
  item: Rec = {
    allergies: '',
    operations: '',
    medication: '',
    conditions: ''
  }
  items: Alleg = {
    name: '',
    reaction: '',
    source: '',
  };
  allegs: Alleg[];
  recs: Rec[];
  user: firebase.User;
  id: string;
  ppic;
  yes;
  als;
  mds;
  cnds;
  opos;
  public currentUser: firebase.User;
  constructor(private mediService: MediService, private afAuth: AngularFireAuth, private auth: AuthService, private router: Router, private service: HealthproService, private afs: AngularFirestore, private serviceService: ServiceService, private condService: ConditionsService, private opoService: OpoService) {
    this.authState = this.afAuth.authState;
  }

  public flag = 1;
  public ans = '';

  ngOnInit(): void {
    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
      });
    this.service.getAlegs().valueChanges().subscribe(recs => {
      // console.log(recs);
      this.recs = recs;
    });
    this.authState.subscribe(user => {

      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid);
        this.getPpic().subscribe(allegs => {
          console.log(allegs);
          this.ppic = allegs;
        });
        this.getYes().subscribe(yes => {
          console.log(yes);
          this.yes = yes;
        });
        this.getAl().subscribe(als => {
          console.log(als);
          this.als = als;
        });
        this.getMed().subscribe(mds => {
          console.log(mds);
          this.mds = mds;
        });
        this.getCond().subscribe(cnds => {
          console.log(cnds);
          this.cnds = cnds;
        });
        this.getOpo().subscribe(opos => {
          console.log(opos);
          this.opos = opos;
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
  public bmi: number;
  calc(frm) {
    this.bmi = frm.value.weight / ((frm.value.height / 100) * (frm.value.height / 100));
  }
  scroll(){
    window.scrollTo(0,document.body.scrollHeight);
  }
  public mark = 1;

  onClickhealth() {
    this.mark = 1;
  }
  onClickbehavirol() {
    this.mark = 2;
  }
  onClickfamily() {
    this.mark = 3;
  }

  onClickYesAlleg() {
    this.item.allergies = "yes";
    this.service.addItem(this.item);
  }

  onClickNoAlleg() {
    this.item.allergies = 'No';
    this.service.addItem(this.item);
  }
  onClickYesMed() {
    this.item.medication = "yes";
    this.service.addItem(this.item);
  }

  onClickNoMed() {
    this.item.medication = 'No';
    this.service.addItem(this.item);
  }
  onClickYesCond() {
    this.item.conditions = "yes";
    this.service.addItem(this.item);
  }

  onClickNoCond() {
    this.item.conditions = 'No';
    this.service.addItem(this.item);
  }
  onClickYesOpo() {
    this.item.operations = "yes";
    this.service.addItem(this.item);
  }

  onClickNoOpo() {
    this.item.operations = 'No';
    this.service.addItem(this.item);
  }
  changingImage() {
    this.changingimg = !this.changingimg;
  }
  getPpic() {
    return this.afs.collection('ppic').doc(this.currentUser.uid).valueChanges();
  }
  getYes() {
    return this.afs.collection('Healthpro').doc(this.currentUser.uid).valueChanges();
  }
  getAl() {
    return this.afs.collection('Allegs', ref => ref.where('id', '==', this.currentUser.uid)).valueChanges();
  }
  getMed() {
    return this.afs.collection('Meds', ref => ref.where('id', '==', this.currentUser.uid)).valueChanges();
  }
  getCond() {
    return this.afs.collection('Conds', ref => ref.where('id', '==', this.currentUser.uid)).valueChanges();
  }
  getOpo() {
    return this.afs.collection('Opo', ref => ref.where('id', '==', this.currentUser.uid)).valueChanges();
  }

  onSubmit() {
    if (this.items.name != '' && this.items.reaction != '') {
      this.items.id = this.currentUser.uid;
      this.serviceService.addItem(this.items);
      this.items.name = '';
      this.items.reaction = '';
      this.items.source = '';
    }
  }
  onSubmitM() {
    if (this.ite.name != '' && this.ite.description != '') {
      this.ite.id = this.currentUser.uid;
      this.mediService.addItem(this.ite);
      this.ite.name = '';
      this.ite.description = '';
    } else {

    }
  }
  onSubmitC() {
    if (this.it.name != '' && this.it.description != '') {
      this.it.id = this.currentUser.uid;
      this.condService.addItem(this.it);
      this.it.name = '';
      this.it.description = '';
    } else {

    }
  }
  onSubmitO() {
    if (this.i.name != '' && this.i.date != '') {
      this.i.id = this.currentUser.uid;
      this.opoService.addItem(this.i);
      this.i.name = '';
      this.i.date = '';
    } else {

    }
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }
}
