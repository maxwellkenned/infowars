import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleModalComponent } from './people-modal.component';

describe('PeopleModelComponent', () => {
  let component: PeopleModalComponent;
  let fixture: ComponentFixture<PeopleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
