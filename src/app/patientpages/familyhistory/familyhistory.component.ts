import { Component, OnInit } from '@angular/core';
import { PatientHealthHistoryService} from './../../../services/shared/patient-health-history.service'

@Component({
  selector: 'app-familyhistory',
  templateUrl: './familyhistory.component.html',
  styleUrls: ['./familyhistory.component.css']
})
export class FamilyhistoryComponent implements OnInit {

  Asthma : false;
  Cancer :false;
  Cystic : false;
  Diabetes : false;
  Early : false;
  Elevated : false;
  Heart : false;
  Blood : false;
  Metabolic : false;
  Seasonal : false;
  Sickie : false;
  Stroke : false;
  Thyroid : false;
  Other : false;

  explain : any;

  constructor(public PatientHealthHistiryService : PatientHealthHistoryService) { }

  ngOnInit(): void {
  }
  addData(){

    alert(this.Stroke);
    alert(this.Heart);

    let Record = {};
    Record ['type']='family';
    Record ['Asthma']= this.Asthma==undefined?false:this.Asthma;
    Record ['Cancer']= this.Cancer==undefined?false:this.Cancer;
    Record ['Cystic']= this.Cystic==undefined?false:this.Cystic;
    Record ['Diabetes']= this.Diabetes==undefined?false:this.Diabetes;
    Record ['Early']= this.Early==undefined?false:this.Early;
    Record ['Elevated']= this.Elevated==undefined?false:this.Elevated;
    Record ['Heart']= this.Heart==undefined?false:this.Heart;
    Record ['Blood']= this.Blood==undefined?false:this.Blood;
    Record ['Metabolic']= this.Metabolic==undefined?false:this.Metabolic;
    Record ['Seasonal']= this.Seasonal==undefined?false:this.Seasonal;
    Record ['Sickie']= this.Sickie==undefined?false:this.Sickie;
    Record ['Stroke']= this.Stroke==undefined?false:this.Stroke;
    Record ['Thyroid']= this.Thyroid==undefined?false:this.Thyroid;
    Record ['Other']= this.Other==undefined?false:this.Other;

    Record ['explain']= this.explain;

    this.PatientHealthHistiryService.addfamily(Record).then(data=>{
      console.log(data)
    }).catch(er=>{
      console.log(er);
    });
  }

}
