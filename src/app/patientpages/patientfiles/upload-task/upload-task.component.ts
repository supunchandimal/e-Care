import { Component, OnInit, Input,ChangeDetectorRef } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage/task';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { tap, finalize, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Files } from 'src/services/files';
import { __await } from 'tslib';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {

 
  @Input() file : File;

  task: AngularFireUploadTask;



  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  file2 :Files;
  public currentUser: firebase.User;
  private authState: Observable<firebase.User>;
  constructor(private storage: AngularFireStorage, private db: AngularFirestore,private afAuth:AngularFireAuth) {
    this.authState = this.afAuth.authState;
    this.authState.subscribe( async user => {
     
      if (user) {
        this.currentUser =  await user;
        console.log('AUTHSTATE USER', user.uid); 

      } else {
        console.log('AUTHSTATE USER EMPTY', user);
        this.currentUser = null;
      }

    },
    err => {
      console.log('Please try again')
    });

    

  }
  date:Date;
  ngOnInit() {
    this.startUpload();



  }

  startUpload() {

    // The storage 
    this.file2 = new Files();
   
    const path = `test/${Date.now()}_${this.file.name}`;
    
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
        this.file2.uid=this.currentUser.uid;
        this.file2.downloadURL= this.downloadURL;
        this.file2.path = path;
        this.file2.date = new Date().toLocaleString();
        console.log(this.file2.date)
        this.db.collection('files').add( { 
          downloadURL: this.file2.downloadURL,
          path:this.file2.path ,
          date:this.file2.date,
          uid:this.file2.uid});
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
