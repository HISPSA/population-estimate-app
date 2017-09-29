import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationSetupFormComponent } from './population-setup-form.component';

describe('PopulationSetupFormComponent', () => {
  let component: PopulationSetupFormComponent;
  let fixture: ComponentFixture<PopulationSetupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationSetupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationSetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
