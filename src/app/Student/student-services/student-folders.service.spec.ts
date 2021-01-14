import { TestBed } from '@angular/core/testing';

import { StudentFoldersService } from './student-folders.service';

describe('StudentFoldersService', () => {
  let service: StudentFoldersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentFoldersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
