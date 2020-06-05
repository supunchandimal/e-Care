import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/services/shared/contactus.service';
import { Contactmessages } from 'src/services/shared/contactmessages';
import { element } from 'protractor';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {


    message= new Contactmessages();
    succornot:string;
    errormsg="";
    
  constructor(private add : ContactusService ) { 

    
  }

  ngOnInit(): void {
  }


  onsubmit(contactusform){
      // console.log(contactusform.value);
      var date = new Date();
       this.message = contactusform.value;
       this.message.mark=0;
       this.message.delete_or_not=0;
       this.message.date= date;
       
       this.add.addmessage(this.message);
       this.succornot="succesfully sent the msg we will contact you  as soon as posible thank for your time";
       contactusform.reset();
      
  }

}
