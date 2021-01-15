import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDocsComponent } from './student-docs.component';

describe('StudentDocsComponent', () => {
  let component: StudentDocsComponent;
  let fixture: ComponentFixture<StudentDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
