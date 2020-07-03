import { Ppic } from './../../models/propic';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class PpicService {
  private authState: Observable<firebase.User>;
  PpicCollection: AngularFirestoreCollection<Ppic>;
  Ppics:Observable<Ppic[]>;
  public currentUser: firebase.User;
  constructor(private afAuth:AngularFireAuth,public afsal:AngularFirestore) {  this.authState = this.afAuth.authState;

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
    this.PpicCollection = this.afsal.collection('ppic');

    this.Ppics=this.afsal.collection('ppic').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as Ppic
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }

   getPpic(){
    return this.afsal.collection('ppic').doc(this.currentUser.uid);
   }

 
}
