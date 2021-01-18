import { TestBed } from '@angular/core/testing';

import { StudentExpService } from './student-exp.service';

describe('StudentExpService', () => {
  let service: StudentExpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentExpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
