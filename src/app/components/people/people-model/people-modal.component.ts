import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/shared/models/people.model';
import { PeopleService } from 'src/app/shared/services/people.service';
import { Film } from 'src/app/shared/models/film.model';
import { Starship } from 'src/app/shared/models/starship.model';
import { Specie } from 'src/app/shared/models/specie.model';
import { Vehicle } from 'src/app/shared/models/vehicle.model';
declare var $;

@Component({
  selector: 'app-people-modal',
  templateUrl: './people-modal.component.html',
  styleUrls: ['./people-modal.component.scss']
})
export class PeopleModalComponent implements OnInit {
  private _people: People;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
  }

  /**
   * @returns People
   */
  public get people(): People {
    return this._people;
  }

  /**
   * @returns Film[]
   */
  public get films(): Film[] {
    return this._people.films;
  }

  /**
   * @returns Starship[]
   */
  public get starships(): Starship[] {
    return this._people.starships;
  }

  /**
   * @returns Specie[]
   */
  public get species(): Specie[] {
    return this._people.species;
  }

  /**
   * @returns Vehicle[]
   */
  public get vehicles(): Vehicle[] {
    return this._people.vehicles;
  }

  /**
   * 
   * @param people People
   */
  public openModal(people: People) {
    this._people = people;

    $('#modal-people').modal('show');
  }

}
