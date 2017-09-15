import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPopulationEstimateComponent } from './form-population-estimate.component';

describe('FormPopulationEstimateComponent', () => {
  let component: FormPopulationEstimateComponent;
  let fixture: ComponentFixture<FormPopulationEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPopulationEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPopulationEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
