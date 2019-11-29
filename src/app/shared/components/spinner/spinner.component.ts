import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() onSpinner: boolean;
  @Input() numberSpinner: number;

  constructor() { }

  ngOnInit() {
  }

  getNumberSpinner(n: number): any[] {
    return Array(n);
  }

}
