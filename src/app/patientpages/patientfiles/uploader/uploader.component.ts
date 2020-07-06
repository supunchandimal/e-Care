import { Component, OnInit } from '@angular/core';
import { Files } from 'src/services/files';
import { GetfilesService } from 'src/services/shared/getfiles.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {


  constructor( private loadfiles:GetfilesService
    
  ) { }


  allfiles:Files[];


  ngOnInit(): void {

    this.loadfiles.getfiles().subscribe(
      allfiles=>{
        this.allfiles = allfiles as Files[];
        console.log(this.allfiles[0].date)
      }
     
    )
  
  }
  isHovering: boolean;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }

}
