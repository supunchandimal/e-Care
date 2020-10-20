import { Component, OnInit  ,ViewChild, ElementRef, Input} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import jsPDF from 'jspdf'

@Component({
  selector: 'app-prescriptionpdf',
  templateUrl: './prescriptionpdf.component.html',
  styleUrls: ['./prescriptionpdf.component.css']
})
export class PrescriptionpdfComponent implements OnInit {

  data:any;
 
  @ViewChild('htmlData') htmlData:ElementRef;
  @Input() public channelid;

  constructor(private db:AngularFirestore) {
   

   }
   patientname;
   date;
   docname;
   prescriptiondata:[];
   ngOnInit(): void {
    this.getApp();
         
  }

  //qr code part stats
  title = 'app';
  elementType = 'url';
  value = "";
  //qr code ends




  //pdf part starts
  public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    doc.html(DATA, {
      callback: (doc) => {
        doc.output("dataurlnewwindow");
      }
   });

  }


  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    
    doc.html(DATA, {
      callback: (doc) => {
        doc.save('s.pdf');
      }
   });
  

    
  }
  getApp() {
    console.log('channelIDDDDDDDDDDDDDDDDDDD - ',this.channelid)
    this.db.collection('prescription', ref => ref.where('channelid', '==', this.channelid)).valueChanges()
    .subscribe(output => {
      this.data = output[0];
      console.log('presDataaaaDDDDDDDDDDDDDDDDDDD - ',this.data)
      this.date = this.data.date;
      this.patientname = this.data.patientname;
      this.docname = this.data.doctorname;
      this.value = this.data.doctorname +" to "+ this.patientname+" and this will be issued by e care";
      this.prescriptiondata = this.data.prescription;

      if(this.data==null){
        this.date=""
        this.date = "";
      this.patientname = "";
      this.docname ="";
      this.value = this.data.doctorname +" to "+ this.patientname+" and this will be issued by e care";
      this.prescriptiondata
      }
    })
  }

}
