import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-prescriptionform',
  templateUrl: './prescriptionform.component.html',
  styleUrls: ['./prescriptionform.component.css']
})
export class PrescriptionformComponent implements OnInit {

  @Input() public channelid;
  prescriptionForm:FormGroup
  descripitonArray=[];
  otherNotesArray=[];
  
  doctorname="dasith devapriya"
  patientname="supun chandimal"
  data: any;
  constructor(private formBuilder:FormBuilder,
    private db:AngularFirestore) { }

  ngOnInit(): void {
    this.prescriptionForm= this.formBuilder.group({
      content: ["",Validators.required],
      other: ["",Validators.required]
    })
  this.getApp()
   
  }
 
  addprescription(){
    this.descripitonArray.push(this.prescriptionForm.controls['content'].value)
    this.prescriptionForm.reset()

  }
  addOtherNotes(){
    this.otherNotesArray.push(this.prescriptionForm.controls['other'].value)
    this.prescriptionForm.reset()
  }


  save(){
    //store in firebase
    this.db.collection('prescription').add({
      prescription:this.descripitonArray,
      channelid:this.channelid,
      doctorname:this.data.docName,
      patientname:this.data.patientname,
      date:this.data.date,
      otherNotes: this.otherNotesArray      
    })
  }


  getApp() {
    this.db.collection('Appoinments', ref => ref.where('channelID', '==', this.channelid)).valueChanges()
    .subscribe(output => {
      this.data = output[0];
      console.log('data - ',this.data)
    })
  }
  }
