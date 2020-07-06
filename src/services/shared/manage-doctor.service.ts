import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { replace } from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class ManageDoctorService {
  collections=["doctors","Users"];



  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;
fuck :any;

  constructor(public firestore: AngularFirestore,
    private afAuth:AngularFireAuth,
    private db:AngularFirestore
    
    ) { }


  constructor(public firestore: AngularFirestore, private afAuth:AngularFireAuth,  private router:Router) { }



create_Newdoctor(Record){
    
  console.log("fuccckkkkk")
  this.createUser(Record);
   
   
  return this.firestore.collection('doctors').add(Record);  

}


get_Alldoctors(){
  return this.firestore.collection('doctors').snapshotChanges();
}

update_doctor(recordid, record){
  this.firestore.doc('doctors/'+recordid).update(record);
}

delete_doctor(record_id){
  this.firestore.doc('doctors/'+record_id).delete();
}




createUser(record){
  this.afAuth.createUserWithEmailAndPassword(record['email'],record['nic'])
    .then(userCredential =>{
      this.newUser =record;
      // console.log(userCredential);
      userCredential.user.updateProfile({
          displayName:record['fullname'],
      });
      console.log("jlksjdflaflkasj")
      this.insertUserData(userCredential)
        return
    }) 
    .catch( error =>{
      this.eventAuthError.next(error);
      console.log(error)
    })

}

insertUserData(userCredential:firebase.auth.UserCredential){

  console.log(this.newUser['email']+'${userCredential.user.uid}')
  
  return this.db.doc(`Users/${userCredential.user.uid}`).set({
    email:this.newUser['email'],
    firstname:this.newUser['fullName'],

    password:this.newUser['nic'],
   
    gender:this.newUser['gender'],
    
    role:"doctor"
  })

}




}


