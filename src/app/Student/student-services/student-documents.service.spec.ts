import { TestBed } from '@angular/core/testing';

import { StudentDocumentsService } from './student-documents.service';

describe('StudentDocumentsService', () => {
  let service: StudentDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
