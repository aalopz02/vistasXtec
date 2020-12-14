import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeDocsComponent } from './visualize-docs.component';

describe('VisualizeDocsComponent', () => {
  let component: VisualizeDocsComponent;
  let fixture: ComponentFixture<VisualizeDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizeDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
