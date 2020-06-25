import { Component, OnInit } from '@angular/core';
import { AppointmentScheduleService } from './../../services/appointment-schedule.service';


@Component({
  selector: 'app-appointment-schedule',
  templateUrl: './appointment-schedule.component.html',
  styleUrls: ['./appointment-schedule.component.css']
})
export class AppointmentScheduleComponent implements OnInit {

  today: number = Date.now();
  minDate: Date;
  maxDate: Date;
  t07 = false;
  t08 = true;

  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  constructor(public AppointmentScheduleService : AppointmentScheduleService) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(this.today);
    this.maxDate = new Date(currentYear + 1, 11, 31);}

  ngOnInit(): void {
  }
  // UpdateSchedule(recorddata) {
  //   let record = {};
  //   record['firstName'] = recorddata.editFirstName;
  //   record['lastName'] = recorddata.editLastName;
  //   record['email'] = recorddata.editEmail;
  //   record['speciality'] = recorddata.editSpeciality;
  //   record['workingHospital'] = recorddata.editWorkingHospital;
  //   this.AppointmentScheduleService.us();
  }

