import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { SharedModule } from './shared/shared.module';
import { SpecieListComponent } from './components/specie/specie-list/specie-list.component';
import { StarshipListComponent } from './components/starship/starship-list/starship-list.component';
import { FilmListComponent } from './components/film/film-list/film-list.component';
import { VehicleListComponent } from './components/vehicle/vehicle-list/vehicle-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    PeopleComponent,
    PeopleListComponent,
    SpecieListComponent,
    StarshipListComponent,
    FilmListComponent,
    VehicleListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
