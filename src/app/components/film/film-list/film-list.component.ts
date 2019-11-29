import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/shared/models/film.model';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html'
})
export class FilmListComponent implements OnInit {

  @Input() film: Film;

  constructor() { }

  ngOnInit() {
  }

}
