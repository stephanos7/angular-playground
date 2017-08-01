import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngeditor',
  template: `<ckeditor
    [(ngModel)]="ckeditorContent"
    [config]="{uiColor: '#3a3a3a'}"
    [readonly]="false"
    (change)="onChange($event)"
    (ready)="onReady($event)"
    (focus)="onFocus($event)"
    (blur)="onBlur($event)"
    debounce="500">
  </ckeditor>`,
  // templateUrl: './ngeditor.component.html',
  styleUrls: ['./ngeditor.component.css']
})
export class NgeditorComponent implements OnInit {
ckeditorContent;

  constructor() { 
        this.ckeditorContent = `<p>My HTML</p>`;
  }

  ngOnInit() {
  }

}
