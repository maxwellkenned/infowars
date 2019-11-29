import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListComponent } from './vehicle-list.component';
import { Vehicle } from 'src/app/shared/models/vehicle.model';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    component.vehicle = new Vehicle();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
