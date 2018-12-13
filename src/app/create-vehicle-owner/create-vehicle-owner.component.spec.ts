import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVehicleOwnerComponent } from './create-vehicle-owner.component';

describe('CreateVehicleOwnerComponent', () => {
  let component: CreateVehicleOwnerComponent;
  let fixture: ComponentFixture<CreateVehicleOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVehicleOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVehicleOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
