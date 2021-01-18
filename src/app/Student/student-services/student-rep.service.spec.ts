import { TestBed } from '@angular/core/testing';

import { StudentRepService } from './student-rep.service';

describe('StudentRepService', () => {
  let service: StudentRepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentRepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
