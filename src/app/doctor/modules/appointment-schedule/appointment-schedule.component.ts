import { Component, OnInit,SimpleChanges } from '@angular/core';
import { AppointmentScheduleService } from './../../services/appointment-schedule.service';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';


@Component({
  selector: 'app-appointment-schedule',
  templateUrl: './appointment-schedule.component.html',
  styleUrls: ['./appointment-schedule.component.css']
})
export class AppointmentScheduleComponent implements OnInit {
  schedule: any;

  today: number = Date.now();
  now=new Date()
  selectedDate=new Date(this.now.getFullYear(),this.now.getMonth(),this.now.getDate());
  minDate: Date;
  maxDate: Date;
  t0700 = false;
  t0720 = false;
  t0740 = false;
  t0800 = false;
  t0820 = false;
  t0840 = false;
  t0900 = false;
  t0920 = false;
  t0940 = false;
  t1000 = false;
  t1020 = false;
  t1040 = false;
  t1100 = false;
  t1120 = false;
  t1140 = false;
  t1200 = false;
  t1220 = false;
  t1240 = false;
  t1300 = false;
  t1320 = false;
  t1340 = false;
  t1400 = false;
  t1420 = false;
  t1500 = false;
  t1520 = false;
  t1540 = false;
  t1600 = false;
  t1620 = false;
  t1640 = false;
  t1700 = false;
  t1720 = false;
  t1740 = false;
  t1800 = false;
  t1820 = false;
  t1840 = false;
  t1900 = false;
  t1920 = false;
  t1940 = false;
  t2000 = false;
  t2020 = false;
  t2040 = false;
  t2100 = false;
  t2120 = false;
  t2140 = false;
  t2200 = false;
  t2220 = false;
  t2240 = false;
  t2300 = false;
  t2320 = false;
  t2340 = false;
  scheduleDate : number;


  constructor(public AppointmentScheduleService : AppointmentScheduleService) { 
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(this.today);
    var temp=new Date();
    temp.setDate(temp.getDate()+7);
    this.maxDate = temp;
  
  }


    ngOnInit(): void {
      this.Test();
    }





  EditSchedule(Record){
    Record.isedit = true;
    Record.editt0700 = Record.t0700;
    Record.editt0720 = Record.t0720;
    Record.editt0740 = Record.t0740;
    Record.editt0800 = Record.t0800;
    Record.editt0820 = Record.t0820;
    Record.editt0840 = Record.t0840;
    Record.editt0900 = Record.t0900;
    Record.editt0920 = Record.t0920;
    Record.editt0940 = Record.t0940;
    Record.editt1000 = Record.t1000;
    Record.editt1020 = Record.t1020;
    Record.editt1040 = Record.t1040;
    Record.editt1100 = Record.t1100;
    Record.editt1120 = Record.t1120;
    Record.editt1140 = Record.t1140;
    Record.editt1200 = Record.t1200;
    Record.editt1220 = Record.t1220;
    Record.editt1240 = Record.t1240;
    Record.editt1300 = Record.t1300;
    Record.editt1320 = Record.t1320;
    Record.editt1340 = Record.t1340;
    Record.editt1400 = Record.t1400;
    Record.editt1420 = Record.t1420;
    Record.editt1440 = Record.t1440;
    Record.editt1500 = Record.t1500;
    Record.editt1520 = Record.t1520;
    Record.editt1540 = Record.t1540;
    Record.editt1600 = Record.t1600;
    Record.editt1620 = Record.t1620;
    Record.editt1640 = Record.t1640;
    Record.editt1700 = Record.t1700;
    Record.editt1720 = Record.t1720;
    Record.editt1740 = Record.t1740;
    Record.editt1800 = Record.t1800;
    Record.editt1820 = Record.t1820;
    Record.editt1840 = Record.t1840;
    Record.editt1900 = Record.t1900;
    Record.editt1920 = Record.t1920;
    Record.editt1940 = Record.t1940;
    Record.editt2000 = Record.t2000;
    Record.editt2020 = Record.t2020;
    Record.editt2040 = Record.t2040;
    Record.editt2100 = Record.t2100;
    Record.editt2120 = Record.t2120;
    Record.editt2140 = Record.t2140;
    Record.editt2200 = Record.t2200;
    Record.editt2220 = Record.t2220;
    Record.editt2240 = Record.t2240;
    Record.editt2300 = Record.t2300;
    Record.editt2320 = Record.t2320;
    Record.editt2340 = Record.t2340;
    Record.editscheduleDate = Record.scheduleDate;
    console.log("heloo2");
  }

  updateSchedule (recorddata){
    console.log("update");
    console.log(recorddata.length);
    let record = {};
    record['appointment'] = {};
    record['appointment']['t0700'] = recorddata.editt0700;
    record['appointment']['t0720'] = recorddata.editt0720;
    record['appointment']['t0740'] = recorddata.editt0740;
    record['appointment']['t0800'] = recorddata.editt0800;
    record['appointment']['t0820'] = recorddata.editt0820;
    record['appointment']['t0840'] = recorddata.editt0840;
    record['appointment']['t0900'] = recorddata.editt0900;
    record['appointment']['t0920'] = recorddata.editt0920;
    record['appointment']['t0940'] = recorddata.editt0940;
    record['appointment']['t1000'] = recorddata.editt1000;
    record['appointment']['t1020'] = recorddata.editt1020;
    record['appointment']['t1040'] = recorddata.editt1040;
    record['appointment']['t1100'] = recorddata.editt1100;
    record['appointment']['t1120'] = recorddata.editt1120;
    record['appointment']['t1140'] = recorddata.editt1140;
    record['appointment']['t1200'] = recorddata.editt1200;
    record['appointment']['t1220'] = recorddata.editt1220;
    record['appointment']['t1240'] = recorddata.editt1240;
    record['appointment']['t1300'] = recorddata.editt1300;
    record['appointment']['t1320'] = recorddata.editt1320;
    record['appointment']['t1340'] = recorddata.editt1340;
    record['appointment']['t1400'] = recorddata.editt1400;
    record['appointment']['t1420'] = recorddata.editt1420;
    record['appointment']['t1440'] = recorddata.editt1440;
    record['appointment']['t1500'] = recorddata.editt1500;
    record['appointment']['t1520'] = recorddata.editt1520;
    record['appointment']['t1540'] = recorddata.editt1540;
    record['appointment']['t1600'] = recorddata.editt1600;
    record['appointment']['t1620'] = recorddata.editt1620;
    record['appointment']['t1640'] = recorddata.editt1640;
    record['appointment']['t1700'] = recorddata.editt1700;
    record['appointment']['t1720'] = recorddata.editt1720;
    record['appointment']['t1740'] = recorddata.editt1740;
    record['appointment']['t1800'] = recorddata.editt1800;
    record['appointment']['t1820'] = recorddata.editt1820;
    record['appointment']['t1840'] = recorddata.editt1840;
    record['appointment']['t1900'] = recorddata.editt1900;
    record['appointment']['t1920'] = recorddata.editt1920;
    record['appointment']['t1940'] = recorddata.editt1940;
    record['appointment']['t2000'] = recorddata.editt2000;
    record['appointment']['t2020'] = recorddata.editt2020;
    record['appointment']['t2040'] = recorddata.editt2040;
    record['appointment']['t2100'] = recorddata.editt2100;
    record['appointment']['t2120'] = recorddata.editt2120;
    record['appointment']['t2140'] = recorddata.editt2140;
    record['appointment']['t2200'] = recorddata.editt2200;
    record['appointment']['t2220'] = recorddata.editt2220;
    record['appointment']['t2240'] = recorddata.editt2240;
    record['appointment']['t2300'] = recorddata.editt2300;
    record['appointment']['t2320'] = recorddata.editt2320;
    record['appointment']['t2340'] = recorddata.editt2340;
    record['date'] = recorddata.editscheduleDate;
    record['doctorID'] = 1;


    if(recorddata.id==null){
      console.log(record)
      this.AppointmentScheduleService.add(record).then(data=>{
        console.log(data)
      }).catch(er=>{
        console.log(er);
      });
    }else{
      this.AppointmentScheduleService.updateSchedule(recorddata.id, record);
      recorddata.isedit = false;
    }
    
  }
  Test(){
    console.log(this.selectedDate)
    this.AppointmentScheduleService.getSchedule(this.selectedDate).subscribe(data => {
      console.log(data.length)
      if(data.length==0){
        this.schedule =[ {
            isedit: false,
            t0700 : false,
            t0720 : false,
            t0740 : false,
            t0800 : false,
            t0820 : false,
            t0840 : false,
            t0900 : false,
            t0920 : false,
            t0940 : false,
            t1000 : false,
            t1020 : false,
            t1040 : false,
            t1100 : false,
            t1120 : false,
            t1140 : false,
            t1200 : false,
            t1220 : false,
            t1240 : false,
            t1300 : false,
            t1320 : false,
            t1340 : false,
            t1400 : false,
            t1420 : false,
            t1440 : false,
            t1500 : false,
            t1520 : false,
            t1540 : false,
            t1600 : false,
            t1620 : false,
            t1640 : false,
            t1700 : false,
            t1720 : false,
            t1740 : false,
            t1800 : false,
            t1820 : false,
            t1840 : false,
            t1900 : false,
            t1920 : false,
            t1940 : false,
            t2000 : false,
            t2020 : false,
            t2040 : false,
            t2100 : false,
            t2120 : false,
            t2140 : false,
            t2200 : false,
            t2220 : false,
            t2240 : false,
            t2300 : false,
            t2320 : false,
            t2340 : false,
            scheduleDate: this.selectedDate,
            id:null,
            
  
          }];


      }else{
        this.schedule = data.map(e => {
          return {
            isedit: false,
            t0700 : e.payload.doc.data()['appointment']['t0700'],
            t0720 : e.payload.doc.data()['appointment']['t0720'],
            t0740 : e.payload.doc.data()['appointment']['t0740'],
            t0800 : e.payload.doc.data()['appointment']['t0800'],
            t0820 : e.payload.doc.data()['appointment']['t0820'],
            t0840 : e.payload.doc.data()['appointment']['t0840'],
            t0900 : e.payload.doc.data()['appointment']['t0900'],
            t0920 : e.payload.doc.data()['appointment']['t0920'],
            t0940 : e.payload.doc.data()['appointment']['t0940'],
            t1000 : e.payload.doc.data()['appointment']['t1000'],
            t1020 : e.payload.doc.data()['appointment']['t1020'],
            t1040 : e.payload.doc.data()['appointment']['t1040'],
            t1100 : e.payload.doc.data()['appointment']['t1100'],
            t1120 : e.payload.doc.data()['appointment']['t1120'],
            t1140 : e.payload.doc.data()['appointment']['t1140'],
            t1200 : e.payload.doc.data()['appointment']['t1200'],
            t1220 : e.payload.doc.data()['appointment']['t1220'],
            t1240 : e.payload.doc.data()['appointment']['t1240'],
            t1300 : e.payload.doc.data()['appointment']['t1300'],
            t1320 : e.payload.doc.data()['appointment']['t1320'],
            t1340 : e.payload.doc.data()['appointment']['t1340'],
            t1400 : e.payload.doc.data()['appointment']['t1400'],
            t1420 : e.payload.doc.data()['appointment']['t1420'],
            t1440 : e.payload.doc.data()['appointment']['t1440'],
            t1500 : e.payload.doc.data()['appointment']['t1500'],
            t1520 : e.payload.doc.data()['appointment']['t1520'],
            t1540 : e.payload.doc.data()['appointment']['t1540'],
            t1600 : e.payload.doc.data()['appointment']['t1600'],
            t1620 : e.payload.doc.data()['appointment']['t1620'],
            t1640 : e.payload.doc.data()['appointment']['t1640'],
            t1700 : e.payload.doc.data()['appointment']['t1700'],
            t1720 : e.payload.doc.data()['appointment']['t1720'],
            t1740 : e.payload.doc.data()['appointment']['t1740'],
            t1800 : e.payload.doc.data()['appointment']['t1800'],
            t1820 : e.payload.doc.data()['appointment']['t1820'],
            t1840 : e.payload.doc.data()['appointment']['t1840'],
            t1900 : e.payload.doc.data()['appointment']['t1900'],
            t1920 : e.payload.doc.data()['appointment']['t1920'],
            t1940 : e.payload.doc.data()['appointment']['t1940'],
            t2000 : e.payload.doc.data()['appointment']['t2000'],
            t2020 : e.payload.doc.data()['appointment']['t2020'],
            t2040 : e.payload.doc.data()['appointment']['t2040'],
            t2100 : e.payload.doc.data()['appointment']['t2100'],
            t2120 : e.payload.doc.data()['appointment']['t2120'],
            t2140 : e.payload.doc.data()['appointment']['t2140'],
            t2200 : e.payload.doc.data()['appointment']['t2200'],
            t2220 : e.payload.doc.data()['appointment']['t2220'],
            t2240 : e.payload.doc.data()['appointment']['t2240'],
            t2300 : e.payload.doc.data()['appointment']['t2300'],
            t2320 : e.payload.doc.data()['appointment']['t2320'],
            t2340 : e.payload.doc.data()['appointment']['t2340'],
            scheduleDate: new Date(e.payload.doc.data()['date'].seconds*1000),
            id: e.payload.doc.id,
  
  
          };
        })
      }
  
      
      console.log("heloo1");
      

    });
  }
}

  