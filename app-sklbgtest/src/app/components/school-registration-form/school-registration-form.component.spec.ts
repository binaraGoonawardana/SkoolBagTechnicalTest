import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolRegistrationFormComponent } from './school-registration-form.component';

describe('SchoolRegistrationFormComponent', () => {
  let component: SchoolRegistrationFormComponent;
  let fixture: ComponentFixture<SchoolRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
