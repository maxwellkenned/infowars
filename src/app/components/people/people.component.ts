import { Component, OnInit, HostListener } from '@angular/core';

import { PeopleList } from 'src/app/shared/models/people-list.model';
import { PeopleService } from 'src/app/shared/services/people.service';
import { People } from 'src/app/shared/models/people.model';
import { GoogleSearchService } from 'src/app/shared/services/google-search.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  private _peopleList: PeopleList;
  private _peoples: People[] = [];
  private _pageBefore = 1;
  private _peopleModel: People;

  constructor(
    private peopleService: PeopleService,
    private googleSearchService: GoogleSearchService
  ) { }

  ngOnInit() {
    this.getPeoples();
  }

  public get peoples() {
    return this._peoples;
  }

  public get peopleModel() {
    return this._peopleModel;
  }

  private getPeoples(urls?: string) {
    this.peopleService.getPeopleList(urls).subscribe((data) => {
        this._peopleList = data;
        this._peoples = this._peoples.concat(data.peoples);
      });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this._peopleList) {
      return;
    }

    const pos = document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - window.outerHeight;
    const regex = /\D/g;
    const pageCurrent = Number(this._peopleList.next.replace(regex, ''));

    if (this._pageBefore !== pageCurrent && pos > max - 350) {
      this._pageBefore = Number(this._peopleList.next.replace(regex, ''));
      this.getPeoples(this._peopleList.next);
    }
  }
}
