import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Contactmessages } from 'src/services/shared/contactmessages';
import { GetfeedbacksService } from 'src/services/shared/getfeedbacks.service';
import { get } from 'https';

@Component({
  selector: 'app-admin-feedbacks',
  templateUrl: './admin-feedbacks.component.html',
  styleUrls: ['./admin-feedbacks.component.css']
})
export class AdminFeedbacksComponent implements OnInit {

  item:Contactmessages={
    
    firstname:'',
    secondname:'',
    phoneno:'',
    email:'',
    subject:''
  }


  contactmessages: Contactmessages[];
  isCollapsed : boolean = true;

  constructor(private getfeedbacks: GetfeedbacksService) {}

  ngOnInit(): void {
    
   this.getfeedbacks.getfeedbacks().subscribe(contactmessages=>{

     this.contactmessages=contactmessages;
      
   }); 
   
    
  }
  
  toggleCollapse(){
    this.isCollapsed= !this.isCollapsed;
  }

  ondelete(key){

    console.log(key);
    this.getfeedbacks.deletefeedback(key);
  }

  ondeleteall(){
     console.log( this.contactmessages.length);
     this.getfeedbacks.deleteall(this.contactmessages);
  }

  onupdate(key){
    console.log("onupdatea", key);
    this.getfeedbacks.markfeedback(key);
  }

  getmarkstatus(i:number){
  if(this.contactmessages[i].mark==1){
    return true;
  }else{
    return false;
  }
  
}

}
