import { TestBed } from '@angular/core/testing';

import { StudentNewsService } from './student-news.service';

describe('StudentNewsService', () => {
  let service: StudentNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
