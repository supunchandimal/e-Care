import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AppointmentScheduleService } from './../../services/appointment-schedule.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';




export interface appointmentDetails {
  date: string,
  docName: string,
  time: string,
}


@Component({
  selector: 'app-appointment-doc',
  templateUrl: './appointment-doc.component.html',
  styleUrls: ['./appointment-doc.component.css']
})

export class AppointmentDocComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  today: number = Date.now();
  now=new Date()
  selectedDate=new Date(this.now.getFullYear(),this.now.getMonth(),this.now.getDate());
  minDate: Date;
  maxDate: Date;
  scheduleData: any;
  currentUserID: string;
  msg : boolean = false ;
  docData: any;
  constructor(
    
    private datePipe: DatePipe,
    public AppointmentScheduleService: AppointmentScheduleService,
    private db: AngularFirestore,
    private router: Router
  ){
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(this.today);
    var temp=new Date();
    temp.setDate(temp.getDate()+7);
    this.maxDate = temp;
    this.currentUserID = localStorage.getItem("currentUserID");
  }
  
  ngOnInit(): void {
    this.db.collection('Appoinments', ref=>ref.where("docid","==",this.currentUserID).where("date","==",this.today).where('status','==','Active').orderBy('time')).valueChanges()
    .subscribe(output => {
      this.scheduleData = output;
      if (this.scheduleData.length==0){
        this.msg = true;
      }else{
        this.msg = false;
        // this.scheduleData = output;
      console.log("updated scheduleDat - ",this.scheduleData);
      }
      // return this.msg = "No Appointments For hello";
      // this.docData = output[0];
      // console.log('docData - ',this.docData)
    })
    // this.Test();
  }

  dateChange(){
    // this.msg = "No Appointments For Today";
    var msg : string ;
    console.log("selected date - ",this.selectedDate);
    var date = this.datePipe.transform(this.selectedDate,"yyyy/MM/dd");
    this.db.collection('Appoinments', ref=>ref.where("docid","==",this.currentUserID).where("date","==",date).where('status','==','Active').orderBy('time')).valueChanges()
    .subscribe(output => {
      this.scheduleData = output;
      if (this.scheduleData.length==0){
        this.msg = true;
      }else{
        this.msg = false;
        // this.scheduleData = output;
      console.log("updated scheduleDat - ",this.scheduleData);
    }})
    // this.AppointmentScheduleService.getSchedule(date).subscribe(data => {
    //   this.scheduleData = data
    //   console.log("updated scheduleDat - ",this.scheduleData)
    // })
  }

  joinVideo(channelID){
    console.log('channelID - ',channelID);
    localStorage.setItem('selectedChannelID_doctor',channelID);
    this.router.navigate(['/docvideo']);
  }

}
