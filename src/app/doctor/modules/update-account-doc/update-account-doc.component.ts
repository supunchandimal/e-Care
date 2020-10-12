import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { UpdateProfileService } from './../../services/update-profile.service';


@Component({
  selector: 'app-update-account-doc',
  templateUrl: './update-account-doc.component.html',
  styleUrls: ['./update-account-doc.component.css']
})
export class UpdateAccountDocComponent implements OnInit {
  uploadProgress: Observable<number>; //view progress of the upload
  downloadURL: Observable<string>; //firebase url of the uploaded document
  selectedFile: File = null;  //file selected to upload
  task: AngularFireUploadTask;
  fb;
  edit : boolean;

  employee: any;
  doctorFirstName:string;
  doctorLastName:string;
  doctorEmail:string;
  doctorSpeciality:string;
  doctorWorkingHospital:string;
  password : string;
  currentUserID: string;
  reply : string;
  constructor( 
    public updateprofileservice : UpdateProfileService,
    private db:AngularFirestore,
    private afStorage: AngularFireStorage
 ) {
   this.currentUserID = localStorage.getItem('currentUserID');
  }

  ngOnInit() {

    this.edit = false;
    this.updateprofileservice.getDoctor().subscribe(data => {

      this.employee = data.map(e => {
        return {
          id: e.payload.doc.id,
          isedit: false,
          doctorFirstName: e.payload.doc.data()['firstName'],
          doctorLastName: e.payload.doc.data()['lastName'],
          doctorEmail: e.payload.doc.data()['email'],
          doctorSpeciality: e.payload.doc.data()['speciality'],
          doctorWorkingHospital: e.payload.doc.data()['workingHospital'],
        };
      })
      console.log(this.employee);

    });
  }

  detectFiles(event) {
    this.selectedFile = event.target.files[0];
  }

  upload() {
    const file = this.selectedFile;
    const filePath = `${this.currentUserID}/proPic`;
    const fileRef = this.afStorage.ref(filePath);
    this.task = this.afStorage.upload(filePath, file);
    this.uploadProgress = this.task.percentageChanges();
  
    this.task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            this.db.collection("Users").doc(this.currentUserID).update({
              proPicURL:url
            })
            
          });
        }),
      )
      .subscribe(url => {
        if (url) {
          console.log("url from subscribe - ", url);
        }
      });  
  }

  EditRecord(Record)
  {
    Record.isedit = true;
    Record.editFirstName = Record.doctorFirstName;
    Record.editLastName = Record.doctorLastName;
    Record.editEmail = Record.doctorEmail;
    Record.editSpeciality = Record.doctorSpeciality;
    Record.editWorkingHospital = Record.doctorWorkingHospital;
  }

  Updatarecord(recorddata)
  {
    let record = {};
    record['firstName'] = recorddata.editFirstName;
    record['lastName'] = recorddata.editLastName;
    record['email'] = recorddata.editEmail;
    record['speciality'] = recorddata.editSpeciality;
    record['workingHospital'] = recorddata.editWorkingHospital;
    this.updateprofileservice.updateDoctor(recorddata.id, record);
    recorddata.isedit = false;
  }

  hello1 (){
    this.edit=true;
  }
  hello2 (){}
  passwordreply(){
    this.reply = "Password Changed Successfully";
  }
}