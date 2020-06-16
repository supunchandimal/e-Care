import { map } from 'rxjs/operators';
import { User } from '../../models/user';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private authState: Observable<firebase.User>;
  MedCollection: AngularFirestoreCollection<User>;
  Meds:Observable<User[]>;
  public currentUser: firebase.User;

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

    this.MedCollection = this.afsal.collection('Users');

    this.Meds=this.afsal.collection('Users').snapshotChanges().pipe(map(changes => {
      return changes.map(a=>{
        const data = a.payload.doc.data() as User
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }
   
   
   getAlegs(){
     return this.afsal.collection('Users', ref => ref.where('email', '==', this.currentUser.email));
   }

   addItem(item:User){
    return this.MedCollection.doc(this.currentUser.uid).update(item);
  }
}

