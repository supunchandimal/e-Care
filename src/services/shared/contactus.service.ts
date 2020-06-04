import { Injectable } from '@angular/core';
import { Contactmessages } from './contactmessages';

import { getSupportedInputTypes } from '@angular/cdk/platform';
import { analytics, firestore } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  message = new Contactmessages();   
  succornot = Number;       
  constructor( private db:AngularFirestore , private router:Router) { }
 
  addmessage(message){
   
  
    this.message= message;
    
  
    
    this.db.collection("contactus_messages").add({
      firstname: message.firstname,
      lastname: message.lastname,
      email:message.email,
      phoneno: message.phoneno,
      subject:message.subject,
      mark:message.mark,
      date:message.date,
      delete_or_not:message.delete_or_not
    }).then(()=>{
      console.log("kljfsalkf");
      this.router.navigate(['/contactus']);

      
    }).catch(function(error){
      console.error("error" ,error);
      
      this.succornot=2;
    })
    
}
}
