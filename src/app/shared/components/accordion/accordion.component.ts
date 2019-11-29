import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() title: any[];
  @Input() idName: string;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
