import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsDirectoryComponent } from './schools-directory.component';

describe('SchoolsDirectoryComponent', () => {
  let component: SchoolsDirectoryComponent;
  let fixture: ComponentFixture<SchoolsDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
