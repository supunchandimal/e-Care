import { Component, OnInit } from '@angular/core';
import { Files } from 'src/services/files';
import { GetfilesService } from 'src/services/shared/getfiles.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {
  private authState: Observable<firebase.User>;
  user: firebase.User;
  public currentUser: firebase.User;
  constructor(private afs:AngularFirestore,private afAuth: AngularFireAuth, private auth: AuthService ) {
    this.authState = this.afAuth.authState;
   }


  allfiles:Files[];


  ngOnInit(): void {

    
    this.auth.getUserState()
    .subscribe(user => {
      this.user = user;
    });
 
  this.authState.subscribe(user => {

    if (user) {
      this.currentUser = user;
      console.log('AUTHSTATE USER', user.uid);

      this.getfiles().subscribe(allfiles => {
        console.log(allfiles);
        this.allfiles = allfiles;
      });
         

    } else {
      console.log('AUTHSTATE USER EMPTY', user);
      this.currentUser = null;
      
    }

  },
    err => {
      console.log('Please try again');
     
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
  getfiles() {
    return this.afs.collection('files', ref => ref.where('uid', '==', this.currentUser.uid)).valueChanges();
  }
}
