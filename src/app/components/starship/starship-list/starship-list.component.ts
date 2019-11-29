import { Component, OnInit, Input } from '@angular/core';
import { Starship } from 'src/app/shared/models/starship.model';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html'
})
export class StarshipListComponent implements OnInit {
  @Input() starship: Starship;

  constructor() { }

  ngOnInit() {
  }

}
