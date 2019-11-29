import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieListComponent } from './specie-list.component';
import { Specie } from 'src/app/shared/models/specie.model';

describe('SpecieListComponent', () => {
  let component: SpecieListComponent;
  let fixture: ComponentFixture<SpecieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieListComponent);
    component = fixture.componentInstance;
    component.specie = new Specie();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
