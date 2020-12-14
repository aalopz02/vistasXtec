import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSendEvalComponent } from './student-send-eval.component';

describe('StudentSendEvalComponent', () => {
  let component: StudentSendEvalComponent;
  let fixture: ComponentFixture<StudentSendEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSendEvalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSendEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
