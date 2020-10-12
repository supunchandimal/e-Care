import { Ppic } from './../../../models/propic';
import { PpicService } from './../../services/ppic.service';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-uploadererppic',
  templateUrl: './uploadererppic.component.html',
  styleUrls: ['./uploadererppic.component.css']
})
export class UploadererppicComponent implements OnInit {
  private authState: Observable<firebase.User>;
  public currentUser: firebase.User;
  item:Ppic={
    downloadURL:'', 
  }
  user:firebase.User;
  allegs;
  constructor(private auth:AuthService,private afAuth:AngularFireAuth,private afs: AngularFirestore) { 
    this.authState = this.afAuth.authState;
  }
  ngOnInit(): void {
    this.auth.getUserState()
      .subscribe(user =>{
        this.user = user;
      });
    this.authState.subscribe(user => {
      
      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid); 
        this.getPpic().subscribe(allegs =>{
          console.log(allegs);
          this.allegs= allegs;
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
  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
 getPpic(){
  return this.afs.collection('Users').doc(this.currentUser.uid).valueChanges();
 }
}
