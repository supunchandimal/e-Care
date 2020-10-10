import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { AdminGraphService } from 'src/services/shared/admin-graph.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-admin-graph',
  templateUrl: './admin-graph.component.html',
  styleUrls: ['./admin-graph.component.css']
})
export class AdminGraphComponent implements OnInit {
  DocCount: any;
  count: any;
  Usercount:any;
  Patientcount:any;
  
  public canvas: any;
  public ctx: any;
  public labels: any = ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT'];
  public dataCases: any = {
    chart1: [10, 5, 24, 14, 34, 8, 10],
    chart2: [2,4, 13, 12, 15, 18, 20],
    chart3: [20,13, 25, 15, 35, 25, 62]
    // chart1: [this.get_AllPatientCount(), this.get_AllDocCount()],
    // chart2: [this.get_AllUserCount()]
  };
  

  constructor(public AdminGraphService: AdminGraphService, public firestore: AngularFirestore, private afAuth: AngularFireAuth, private db: AngularFirestore) { 
    // var arrayX:number[];
    // var arrayY:number[];
    //  arrayX=[1,2,3];
    //  arrayY=[2018,2019, 2020];
  }

  ngOnInit(): void {
    this.count=this.get_AllDocCount();
    this.Usercount=this.get_AllUserCount();
    this.Patientcount=this.get_AllPatientCount();
   
    this.createLineChart(this.labels, this.dataCases, 'myChart');
}
  get_AllDocCount() {
  //  this.firestore.collection("doctors").valueChanges(). subscribe( values =>
  //     console.log(values.length)  
  //   );
  this.firestore.collection("doctors").valueChanges(). subscribe( values =>
    {this.count=values.length
    });
  }

  get_AllUserCount() {
    this.firestore.collection("Users").valueChanges(). subscribe( values =>
      {this.Usercount=values.length
      });
    }

    get_AllPatientCount() {
      this.firestore.collection("Users",ref=>ref.where('role','==','patient')).valueChanges(). subscribe( values =>
        {this.Patientcount=values.length
      });
      // this.Patientcount= this.Usercount-this.count;
      // return this.Patientcount;
       
      }


      private createLineChart(labels, dataCases, chartId) {
        this.canvas = document.getElementById(chartId);
        this.ctx = this.canvas.getContext('2d');
    
        let chart = new Chart(this.ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              label: "Doctors",
              data: dataCases.chart1,
              backgroundColor: '#ffbb33',
              borderColor: '#ffbb33',
              fill: false,
              borderWidth: 2
            },
            {
              label: "Patients",
              data: dataCases.chart2,
              backgroundColor: '#ff4444',
              borderColor: '#ff4444',
              fill: false,
              borderWidth: 2
            },
            {
              label: "AllUsers",
              data: dataCases.chart3,
              backgroundColor: '#2277e0',
              borderColor: '#2277e0',
              fill: false,
              borderWidth: 2
            }
          ]
          },
          options: {
            title: {
              display: true,
              text: "Users"
            },
            tooltips: {
              mode: 'index',
              intersect: true
            },
            hover: {
              mode: 'nearest',
              intersect: true
            },
            
          }
        });
      }
}
