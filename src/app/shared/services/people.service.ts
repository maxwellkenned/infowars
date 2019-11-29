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

  public async getPeopleList(url?: string): Promise<PeopleList> {
    const urlRequest = url || `${config.baseURL}people/`;
    return await this.http.get(urlRequest)
      .toPromise()
      .then(data => deserialize(PeopleList, data))
      .then((data: PeopleList) => {
        let peopleList = data;
        data.peoples.map((people: People) => {
          this.googleSearchService.searchImage(people.name).then(res => people.image = res);
          this.getDataByUrl(people.homeworld, Planet).then((res: any) => people.homeworld = res.name);

          people.species.map((url, i) => {
            return this.getDataByUrl(url, Specie).then(res => people.species[i] = res);
          });

          people.starships.map((url, i) => {
            return this.getDataByUrl(url, Starship).then(res => people.starships[i] = res);
          });

          people.films.map((url, i) => {
            return this.getDataByUrl(url, Film).then(res => people.films[i] = res);
          });

          people.vehicles.map((url, i) => {
            return this.getDataByUrl(url, Vehicle).then(res => people.vehicles[i] = res);
          });

          return people;
        });

        return data;
      });
  }

  public getDataByUrl(url: string, type) {
    return this.http.get(url)
      .toPromise()
      .then(data => deserialize(type, data));
  }
}
