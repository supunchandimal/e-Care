import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage/task';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-ppic',
  templateUrl: './ppic.component.html',
  styleUrls: ['./ppic.component.css']
})
export class PpicComponent implements OnInit {
  private authState: Observable<firebase.User>;
  public currentUser: firebase.User;
  @Input() file : File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private afAuth:AngularFireAuth,private storage: AngularFireStorage, private db: AngularFirestore) { 
    this.authState = this.afAuth.authState;
  }
  date:Date;
  ngOnInit() {
    this.startUpload();
    this.authState.subscribe(user => {
      
      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid); 
        
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

  startUpload() {

    // The storage path
    const path = `Uploads/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The fidle's downloa URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db.collection('ppic').doc(this.currentUser.uid).set( { downloadURL: this.downloadURL, path ,date:Date.now()});
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
