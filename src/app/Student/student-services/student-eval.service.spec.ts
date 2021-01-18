import { TestBed } from '@angular/core/testing';

import { StudentEvalService } from './student-eval.service';

describe('StudentEvalService', () => {
  let service: StudentEvalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentEvalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
