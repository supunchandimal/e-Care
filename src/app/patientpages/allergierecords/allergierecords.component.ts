import { Alleg } from '../../models/allergie';
import { ServiceService } from '../services/service.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-allergierecords',
  templateUrl: './allergierecords.component.html',
  styleUrls: ['./allergierecords.component.css']
})
export class AllergierecordsComponent implements OnInit {
  
  item:Alleg={
    name:'',
    reaction:'',
    source:'',
  }
  allegs: Alleg[];
  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
    this.serviceService.getAlegs().subscribe(allegs =>{
       // console.log(allegs);
        this.allegs= allegs;
    });
  }

  onSubmit(){
    if(this.item.name != '' && this.item.reaction != ''){
      this.serviceService.addItem(this.item);
      this.item.name = '';
      this.item.reaction = '';
      this.item.source = '';
    }
  }

}
