import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  constructor(
    private afAuth:AngularFireAuth,
    private db:AngularFirestore,
    private router:Router
  ) { 

  }

  login( email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.afAuth.authState.subscribe(user=>{
            
            
            this.db.collection("Users").doc(`${user.uid}`).valueChanges().subscribe(
              data=>{
              
                if(data != null){
                  if(data['role']=="admin"){
                    this.router.navigate(['/admin']);
                  }else if(data['role']=="patient"){
                    this.router.navigate(['/patientHome']);
                }else if (data['role']=="doctor"){
                  this.router.navigate(['/docHome'])
                }
                }
              }
            )
          })
          
        }
      })
  }


}
