import { Component, OnInit } from '@angular/core';
import { PatientHealthHistoryService} from './../../../services/shared/patient-health-history.service'

@Component({
  selector: 'app-familyhistory',
  templateUrl: './familyhistory.component.html',
  styleUrls: ['./familyhistory.component.css']
})
export class FamilyhistoryComponent implements OnInit {

  Asthma : Boolean;
  Cancer :Boolean;
  Cystic : Boolean;
  Diabetes : Boolean;
  Early : Boolean;
  Elevated : Boolean;
  Heart : Boolean;
  Blood : Boolean;
  Metabolic : Boolean;
  Seasonal : Boolean;
  Sickie : Boolean;
  Stroke : Boolean;
  Thyroid : Boolean;
  Other : Boolean;

  explain : string;

  constructor(public PatientHealthHistiryService : PatientHealthHistoryService) { }

  ngOnInit(): void {
  }
  addData(){

    let Record = {};
    Record ['type']='family';
    Record ['Asthma']= this.Asthma;
    Record ['Cancer']= this.Cancer;
    Record ['Cystic']= this.Cystic;
    Record ['Diabetes']= this.Diabetes;
    Record ['Early']= this.Early;
    Record ['Elevated']= this.Elevated;
    Record ['Heart']= this.Heart;
    Record ['Blood']= this.Blood;
    Record ['Metabolic']= this.Metabolic;
    Record ['Seasonal']= this.Seasonal;
    Record ['Sickie']= this.Sickie;
    Record ['Stroke']= this.Stroke;
    Record ['Thyroid']= this.Thyroid;
    Record ['Other']= this.Other;

    Record ['explain']= this.explain;

    this.PatientHealthHistiryService.addfamily(Record).then(data=>{
      console.log(data)
    }).catch(er=>{
      console.log(er);
    });
  }

}
