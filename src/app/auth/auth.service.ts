import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { PatientDefaultPageComponent } from '../patient-default-page/patient-default-page.component';
import { strict } from 'assert';
import { map } from 'rxjs/operators';
import { analytics } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;
fuck :any;
  constructor(
    private afAuth:AngularFireAuth,
    private db:AngularFirestore,
    private router:Router) { }

    getUserState(){
     return this.afAuth.authState;
    }

    createUser(user){
      this.afAuth.createUserWithEmailAndPassword(user.email,user.password)
        .then(userCredential =>{
          this.newUser = user;
          console.log(userCredential);
          userCredential.user.updateProfile({
              displayName:user.firstName,
          });
          
          this.insertUserData(userCredential)
            .then(()=>{
              console.log(this.newUser.gender);
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
      return this.db.doc(`Users/${userCredential.user.uid}`).set({
        email:this.newUser.email,
        firstname:this.newUser.firstName,
        secondname:this.newUser.secondName,
        password:this.newUser.password,
        dob:this.newUser.dob,
        gender:this.newUser.gender,
        phone:this.newUser.phone,
        role:"patient"
      })

    }
    logout(){
      return this.afAuth.signOut();
    }

}
