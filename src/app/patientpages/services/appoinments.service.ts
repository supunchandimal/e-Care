import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Time } from './../../models/time';
import { Appoinments } from 'src/app/models/appoinments';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentsService {
  private authState: Observable<firebase.User>;
  TimeCollection: AngularFirestoreCollection<Time>;
  AppoinmentCollection: AngularFirestoreCollection<Appoinments>;
  Appoinment:Observable<Appoinments[]>;
  Times:Observable<Time[]>;
  Timedoc : AngularFirestoreDocument<Time>;
  public currentUser: firebase.User
  constructor(private afAuth:AngularFireAuth,public afsal:AngularFirestore) {
    this.authState = this.afAuth.authState; 
    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid); //this works
        
      } else {
        console.log('AUTHSTATE USER EMPTY', user);
        this.currentUser = null;
      }
    },
    err => {
      console.log('Please try again')
    });
    this.TimeCollection = this.afsal.collection('freetimes');

    this.Times=this.afsal.collection('freetimes').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Time
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.AppoinmentCollection = this.afsal.collection('Appoinments');

    this.Appoinment=this.afsal.collection('Appoinments').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Appoinments
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  updateTime(time : Time){
    this.Timedoc = this.afsal.doc(`freetimes/${time.id}`);
    console.log(time.id);
    this.Timedoc.update({
      status:'booked'
    })
  }
  addItem(item:Appoinments){
    return this.AppoinmentCollection.add(item);
  }
}
