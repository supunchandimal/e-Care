import { Component, OnInit  ,ViewChild, ElementRef} from '@angular/core';
import jsPDF from 'jspdf'

@Component({
  selector: 'app-prescriptionpdf',
  templateUrl: './prescriptionpdf.component.html',
  styleUrls: ['./prescriptionpdf.component.css']
})
export class PrescriptionpdfComponent implements OnInit {

  
  ngOnInit(): void {
  }
  @ViewChild('htmlData') htmlData:ElementRef;


  constructor() { }

  //qr code part stats
  title = 'app';
  elementType = 'url';
  value = "doctor id:12345523432 fsdafsdafadsfasfsafsadflksdfjlkfjakfjlkadsjflkajsdfklasjfksdjal";
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

}
