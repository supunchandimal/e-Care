import { from } from 'rxjs';
import { Ppic } from './../../models/propic';
import { Rec } from './../../models/healthpro';
import { HealthproService } from './../services/healthpro.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-healthprofile',
  templateUrl: './healthprofile.component.html',
  styleUrls: ['./healthprofile.component.css']
})
export class HealthprofileComponent implements OnInit {
  files : FileList;
  upload : Ppic;
  item:Rec={
    allergies:'',
    operations:'',
    medication:'',
    conditions:''
  }
  recs: Rec[];
  user:firebase.User;
  constructor(private auth:AuthService,private router:Router,private service:HealthproService) { }
    
  public flag = 1;
  public ans = '';
  
  ngOnInit(): void {
    this.auth.getUserState()
      .subscribe(user =>{
        this.user = user;
      });
      this.service.getAlegs().valueChanges().subscribe(recs =>{
       // console.log(recs);
        this.recs= recs;
    });
  }
public  bmi: number;
  calc(frm){
    this.bmi=frm.value.weight/((frm.value.height/100)*(frm.value.height/100));
  }

  onClickYesAlleg(){
    this.item.allergies="yes";
    this.service.addItem(this.item);
  }
  
  onClickNoAlleg(){
    this.item.allergies = 'No';
    this.service.addItem(this.item);
  }
  onClickYesMed(){
    this.item.medication="yes";
    this.service.addItem(this.item);
  }
  
  onClickNoMed(){
    this.item.medication = 'No';
    this.service.addItem(this.item);
  }
  onClickYesCond(){
    this.item.conditions="yes";
    this.service.addItem(this.item);
  }
  
  onClickNoCond(){
    this.item.conditions = 'No';
    this.service.addItem(this.item);
  }
  onClickYesOpo(){
    this.item.operations="yes";
    this.service.addItem(this.item);
  }
  
  onClickNoOpo(){
    this.item.operations = 'No';
    this.service.addItem(this.item);
  }
}
