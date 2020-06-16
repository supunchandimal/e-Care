import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploadererppic',
  templateUrl: './uploadererppic.component.html',
  styleUrls: ['./uploadererppic.component.css']
})
export class UploadererppicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
