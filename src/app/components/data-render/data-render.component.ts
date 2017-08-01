import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-render',
  templateUrl: './data-render.component.html',
  styleUrls: ['./data-render.component.css']
})
export class DataRenderComponent implements OnInit {
@Input() renderedText: any;

  constructor() { }

  ngOnInit() {
  }



}
