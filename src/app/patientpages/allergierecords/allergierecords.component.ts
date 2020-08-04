import { Alleg } from '../../models/allergie';
import { ServiceService } from '../services/service.service';
import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-allergierecords',
  templateUrl: './allergierecords.component.html',
  styleUrls: ['./allergierecords.component.css']
})
export class AllergierecordsComponent implements OnInit {
  private authState: Observable<firebase.User>;
  public currentUser: firebase.User;
  loader=false;
  item:Alleg={
    did:'',
    name:'',
    reaction:'',
    source:'',
  }
  yes;
  allegs: Alleg[];
  constructor(private afs: AngularFirestore,private afAuth:AngularFireAuth,private serviceService:ServiceService) { 
    this.authState = this.afAuth.authState;
  }

  ngOnInit(): void {
    this.loader=true;
    this.authState.subscribe(user => {
      this.loader=true;
      if (user) {
        this.currentUser = user;
        console.log('AUTHSTATE USER', user.uid); 
        this.serviceService.getAlegs().valueChanges().subscribe(allegs =>{
          //console.log(allegs);
        this.allegs= allegs;
      });
      this.getYes().subscribe(yes => {
        console.log(yes);
        this.yes = yes;
      });
        //this works
        
      } else {
        console.log('AUTHSTATE USER EMPTY', user);
        this.currentUser = null;
      }
      this.loader=false;
    },
    err => {
      console.log('Please try again')
    });

    
  }

  onSubmit(){
    if(this.item.name != '' && this.item.reaction != ''){
      this.item.did=this.currentUser.uid;
      this.serviceService.addItem(this.item);
      this.item.name = '';
      this.item.reaction = '';
      this.item.source = '';
    }
  }

  deleteItem(event ,allegs){
    this.serviceService.deleteItem(allegs);
    console.log('hii');
  }
  getYes() {
    return this.afs.collection('Healthpro').doc(this.currentUser.uid).valueChanges();
  }
}
