import { TestBed } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { PeopleList } from '../models/people-list.model';
import { Observable } from 'rxjs';

describe('PeopleService', () => {
  let peopleService: PeopleService;
  let httpClientSpy: {get: jasmine.Spy};
  let googleSearchServiceSpy: {get: jasmine.Spy};

  beforeEach(() => {
    googleSearchServiceSpy = jasmine.createSpyObj('GoogleSearchService', ['searchImage']);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'pipe']);
    peopleService = new PeopleService(<any> httpClientSpy, <any> googleSearchServiceSpy);
  });

  it('should be created', () => {
    expect(peopleService).toBeTruthy();
  });

  it('should return a PeopleList object', () => {
    const expectedPeopleList: PeopleList = new PeopleList();

    httpClientSpy.get.and.returnValue(expectedPeopleList);

    peopleService.getPeopleList().subscribe((res) => {
        expect(res).toBe(new PeopleList());
    });
  });
});
