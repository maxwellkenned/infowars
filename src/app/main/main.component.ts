import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PeopleService } from '../shared/services/people.service';
import { PeopleList } from '../shared/models/people-list.model';
import { People } from '../shared/models/people.model';
import { Film } from '../shared/models/film.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title: string;

  constructor() {
    this.title = 'Star Wars';
  }

  ngOnInit() {
  }
}
