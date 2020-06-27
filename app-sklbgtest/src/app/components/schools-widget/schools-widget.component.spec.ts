import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsWidgetComponent } from './schools-widget.component';

describe('SchoolsWidgetComponent', () => {
  let component: SchoolsWidgetComponent;
  let fixture: ComponentFixture<SchoolsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
