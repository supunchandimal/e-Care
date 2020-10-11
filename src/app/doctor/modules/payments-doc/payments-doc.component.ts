import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AppointmentScheduleService } from './../../services/appointment-schedule.service';

@Component({
  selector: 'app-payments-doc',
  templateUrl: './payments-doc.component.html',
  styleUrls: ['./payments-doc.component.css']
})
export class PaymentsDocComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  today: number = Date.now();
  now=new Date()
  selectedDate=new Date(this.now.getFullYear(),this.now.getMonth(),this.now.getDate());
  minDate: Date;
  maxDate: Date;
  scheduleData: any;
  currentUserID: string;
  countx : number;
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

  ngOnInit(): void {}

  dateChange(){
    console.log("selected date - ",this.selectedDate);
    var date = this.datePipe.transform(this.selectedDate,"yyyy/MM/dd");
    this.db.collection('Appoinments', ref=>ref.where("docid","==",this.currentUserID).where("date","==",date).where('status','==','Active').orderBy('time')).valueChanges()
    .subscribe(output => {
      
      this.scheduleData = output;
      //  countx = output.length;
    
      console.log("updated scheduleDat - ",this.scheduleData);
    })

  }
  

}
