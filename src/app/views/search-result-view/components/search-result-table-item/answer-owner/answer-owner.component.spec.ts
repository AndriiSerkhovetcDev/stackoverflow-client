import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerOwnerComponent } from './answer-owner.component';

describe('AnswerOwnerComponent', () => {
  let component: AnswerOwnerComponent;
  let fixture: ComponentFixture<AnswerOwnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnswerOwnerComponent]
    });
    fixture = TestBed.createComponent(AnswerOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
