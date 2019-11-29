import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { deserialize } from 'serializr';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import config from 'src/app/config/config';

import { PeopleList } from '../models/people-list.model';
import { People } from '../models/people.model';
import { Film } from '../models/film.model';
import { GoogleSearchService } from './google-search.service';
import { Starship } from '../models/starship.model';
import { Specie } from '../models/specie.model';
import { Vehicle } from '../models/vehicle.model';
import { Planet } from '../models/planet.model';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient, private googleSearchService: GoogleSearchService) { }

  public getPeopleList(url?: string): Observable<PeopleList> {
    const urlRequest = url || `${config.baseURL}people/`;

    return this.http.get<PeopleList>(urlRequest)
      .pipe(
        map(data => deserialize(PeopleList, data)),
        map((data: PeopleList) => {
          data.peoples.map((people: People) => {
            this.googleSearchService.searchImage(people.name).subscribe(res => people.image = res);
            this.getDataByUrl(people.homeworld, Planet).subscribe((res: any) => people.homeworld = res.name);

            people.species.map((url, i) => {
              return this.getDataByUrl(url, Specie).subscribe(res => people.species[i] = res);
            });

            people.starships.map((url, i) => {
              return this.getDataByUrl(url, Starship).subscribe(res => people.starships[i] = res);
            });

            people.films.map((url, i) => {
              return this.getDataByUrl(url, Film).subscribe(res => people.films[i] = res);
            });

            people.vehicles.map((url, i) => {
              return this.getDataByUrl(url, Vehicle).subscribe(res => people.vehicles[i] = res);
            });

            return people;
          });

          return data;
        }));
  }

  public getDataByUrl(url: string, type): Observable<any> {
    return this.http.get(url).pipe(
      map(data => deserialize(type, data))
    );
  }
}
