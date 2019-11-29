import { Component, OnInit, Input } from '@angular/core';
import { Specie } from 'src/app/shared/models/specie.model';

@Component({
  selector: 'app-specie-list',
  templateUrl: './specie-list.component.html'
})
export class SpecieListComponent implements OnInit {

  @Input() specie: Specie;

  constructor() { }

  ngOnInit() {
  }

}
