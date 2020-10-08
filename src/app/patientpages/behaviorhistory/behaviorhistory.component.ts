import { Component, OnInit } from '@angular/core';
import { PatientHealthHistoryService} from './../../../services/shared/patient-health-history.service'

@Component({
  selector: 'app-behaviorhistory',
  templateUrl: './behaviorhistory.component.html',
  styleUrls: ['./behaviorhistory.component.css']
})
export class BehaviorhistoryComponent implements OnInit {
  mentalHealth="";
  Behavirol : Boolean;
  Emotional_Problem : Boolean;
  Substance_Abuse : Boolean;
  Relationship_Issue : Boolean;
  Other : Boolean;
  explain : string;

  Alcohol : Boolean;
  Anxiety : Boolean;
  Bipolar : Boolean;
  Depression : Boolean;
  Obsessive : Boolean;
  Panic : Boolean;
  Schizophrenia : Boolean;

  YourMentalHealth : number;

  Unknown : Boolean;

  Substance : number;

  gender_preference : number;

  Alcohol_1 : Boolean;
  Bipolar_1 : Boolean;
  Depression_1 : Boolean;
  Obsessive_1 : Boolean;
  Schizophrenia_1 : Boolean;

  constructor(public PatientHealthHistiryService : PatientHealthHistoryService) { }
  
  
  ngOnInit(): void {

  }
  addData(){

    let Record = {};
    Record ['type']="Behavirol";
    Record['Emotional_Problem'] = this.Emotional_Problem;
    Record['Substance_Abuse'] = this.Substance_Abuse;
    Record['Relationship_Isuue'] = this.Relationship_Issue;
    Record['Other'] = this.Other;
    Record['explain'] = this.explain;

    Record['Alcohol'] = this.Alcohol;
    Record['Anxiety'] = this.Anxiety;
    Record['Bipolar'] = this.Bipolar;
    Record['Depression'] = this.Depression;
    Record['Obessive'] = this.Obsessive;
    Record['Panic'] = this.Panic;
    Record['Schizophrenia'] = this.Schizophrenia;

    Record['YourMentalHealth'] = this.YourMentalHealth;
    Record['Unknown'] = this.Unknown;
    Record['Substance'] = this.Substance;
    Record['gender_preference'] = this.gender_preference;

    Record['Alcohol_1'] = this.Alcohol_1;
    Record['Bipolar_1'] = this.Bipolar_1;
    Record['Depression_1'] = this.Depression_1;
    Record['Obsessive_1'] = this.Obsessive_1;
    Record['Schizophrenia_1'] = this.Schizophrenia_1;


    this.PatientHealthHistiryService.addBehavirol(Record).then(data=>{
      console.log(data)
    }).catch(er=>{
      console.log(er);
    });
  }

}
