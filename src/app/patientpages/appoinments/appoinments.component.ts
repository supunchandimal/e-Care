import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, combineLatest, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {Time} from 'src/app/models/time'
@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})
export class AppoinmentsComponent implements OnInit {
 
  @ViewChild('secondDialog') secondDialog: TemplateRef<any>;
  searchterm: string;
  flag = 6;
  startAt = new Subject();
  endAt = new Subject();
  free;
  doc;
  docs;
  times;
  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();
  private authState: Observable<firebase.User>;
  public currentUser: firebase.User;
  user:firebase.User;

  constructor(public afs:AngularFirestore,private dialog: MatDialog,private auth:AuthService,private afAuth:AngularFireAuth) {
    this.authState = this.afAuth.authState;
  }
 
 

  ngOnInit(): void {
    console.log("hi")
    this.auth.getUserState()
      .subscribe(user =>{
        this.user = user;
      });
    this.authState.subscribe(user => {
      
      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid); 
        this.getfreetime().subscribe(time => {
          this.times = time;
          console.log(time);
        });
        
        combineLatest(this.startobs, this.endobs).subscribe((value) => {
          this.getalldocs(value[0], value[1]).subscribe((docs) => {
            this.docs = docs;
          })
        })
        combineLatest(this.startobs, this.endobs).subscribe((value) => {
          this.firequery(value[0], value[1]).subscribe((docs) => {
            
            this.doc = docs;
          })
        })
        
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
  search($event) {
    let q = $event.target.value;
    if (q != '') {
      this.startAt.next(q);
      this.endAt.next(q + "\uf8ff");
    }
  }
  firequery(start, end) {
    return this.afs.collection('doctors', ref => ref.limit(100).orderBy('speciality').startAt(start).endAt(end)).valueChanges();
  }
  getalldocs(start, end) {
    return this.afs.collection('doctors', ref => ref.limit(100).orderBy('fullName').startAt(start).endAt(end)).valueChanges();
  }
  getfreetime(){
    return this.afs.collection('freetimes').valueChanges();
  }
 
  openOtherDialog(docNIC) {
    this.dialog.open(this.secondDialog);
    this.afs.collection('freetimes',ref => ref.where('nic','==',docNIC)).valueChanges()
    .subscribe(output => {
      this.times = output;
    })
  }
 
}
