import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PeopleComponent } from './components/people/people.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ButtonToTopComponent } from './shared/components/button-to-top/button-to-top.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { PeopleModalComponent } from './components/people/people-model/people-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    PeopleComponent,
    SpinnerComponent,
    ButtonToTopComponent,
    ModalComponent,
    PeopleModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
