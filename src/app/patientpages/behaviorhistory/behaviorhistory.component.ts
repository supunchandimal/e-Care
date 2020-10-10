import { Component, OnInit } from '@angular/core';
import { PatientHealthHistoryService} from './../../../services/shared/patient-health-history.service'

@Component({
  selector: 'app-behaviorhistory',
  templateUrl: './behaviorhistory.component.html',
  styleUrls: ['./behaviorhistory.component.css']
})
export class BehaviorhistoryComponent implements OnInit {
  mentalHealth="";
  Behavirol : false;
  Emotional_Problem : false;
  Substance_Abuse : false;
  Relationship_Issue : false;
  Other : false;
  explain : any;

  Alcohol : false;
  Anxiety : false;
  Bipolar : false;
  Depression : false;
  Obsessive : false;
  Panic : false;
  Schizophrenia : false;

  YourMentalHealth : number;

  Unknown : false;

  Substance : number;

  gender_preference : number;

  Alcohol_1 : false;
  Bipolar_1 : false;
  Depression_1 : false;
  Obsessive_1 : false;
  Schizophrenia_1 : false;

  constructor(public PatientHealthHistiryService : PatientHealthHistoryService) { }
  
  
  ngOnInit(): void {

  }
  addData(){
    alert(this.Schizophrenia);
    alert(this.Panic);
    let Record = {};
    
    Record ['type']="Behavirol";
    Record['Emotional_Problem'] = this.Emotional_Problem==undefined?false:this.Emotional_Problem;
    Record['Substance_Abuse'] = this.Substance_Abuse==undefined?false:this.Substance_Abuse;
    Record['Relationship_Isuue'] = this.Relationship_Issue==undefined?false:this.Relationship_Issue;
    Record['Other'] = this.Other==undefined?false:this.Other;

    Record['explain'] = this.explain;

    Record['Alcohol'] = this.Alcohol==undefined?false:this.Alcohol;
    Record['Anxiety'] = this.Anxiety==undefined?false:this.Anxiety;
    Record['Bipolar'] = this.Bipolar==undefined?false:this.Bipolar;
    Record['Depression'] = this.Depression==undefined?false:this.Depression;
    Record['Obessive'] = this.Obsessive==undefined?false:this.Obsessive;
    Record['Panic'] = this.Panic==undefined?false:this.Panic;
    Record['Schizophrenia'] = this.Schizophrenia==undefined?false:this.Schizophrenia;

    Record['YourMentalHealth'] = this.YourMentalHealth==undefined?false:this.YourMentalHealth;
    Record['Unknown'] = this.Unknown==undefined?false:this.Unknown;
    Record['Substance'] = this.Substance==undefined?false:this.Substance;
    Record['gender_preference'] = this.gender_preference==undefined?false:this.gender_preference;

    Record['Alcohol_1'] = this.Alcohol_1==undefined?false:this.Alcohol_1;
    Record['Bipolar_1'] = this.Bipolar_1==undefined?false:this.Bipolar_1;
    Record['Depression_1'] = this.Depression_1==undefined?false:this.Depression_1;
    Record['Obsessive_1'] = this.Obsessive_1==undefined?false:this.Obsessive_1;
    Record['Schizophrenia_1'] = this.Schizophrenia_1==undefined?false:this.Schizophrenia_1;

    console.log(Record);
    this.PatientHealthHistiryService.addBehavirol(Record).then(data=>{
      console.log(data)
    }).catch(er=>{
      console.log(er);
    });
  }

}
