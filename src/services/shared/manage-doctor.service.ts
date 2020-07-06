import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ManageDoctorService {
  collections=["doctors","Users"];

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;

  constructor(public firestore: AngularFirestore, private afAuth:AngularFireAuth,  private router:Router) { }


create_Newdoctor(Record,collections){
  const promises=collections.map(collectionName=>
    this.firestore.collection(collectionName).add(Record)
    );
  return Promise.all(promises);
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

// ---------------------------------------------------------

createUser(Record){
  this.afAuth.createUserWithEmailAndPassword(Record.email,Record.nic)
    .then(userCredential =>{
      this.newUser = Record;
      // console.log(userCredential);
      userCredential.user.updateProfile({
          displayName:Record.fullName,
      });
      
      this.insertUserData(userCredential)
        .then(()=>{
         // console.log(this.newUser.gender);
          this.newUser=null;
          userCredential=null;
          this.router.navigate(['/login']);
        });
    })
    .catch( error =>{
      this.eventAuthError.next(error);
    })
}

insertUserData(userCredential:firebase.auth.UserCredential){
  return this.firestore.doc(`Users/${userCredential.user.uid}`).set({
    email:this.newUser.email,
    fullName:this.newUser.fullName,
    // secondname:this.newUser.secondName,
    nic:this.newUser.nic,
    dob:this.newUser.dob,
    gender:this.newUser.gender,
    // phone:this.newUser.phone,
    role:"doctor"
  })

}
logout(){
  return this.afAuth.signOut();
}


}
