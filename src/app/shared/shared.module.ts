import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonToTopComponent } from './components/button-to-top/button-to-top.component';
import { ModalComponent } from './components/modal/modal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PeopleService } from './services/people.service';
import { GoogleSearchService } from './services/google-search.service';


@NgModule({
  declarations: [
    AccordionComponent,
    ButtonToTopComponent,
    ModalComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    AccordionComponent,
    ButtonToTopComponent,
    ModalComponent,
    SpinnerComponent
  ],
  providers: []
})
export class SharedModule { }
