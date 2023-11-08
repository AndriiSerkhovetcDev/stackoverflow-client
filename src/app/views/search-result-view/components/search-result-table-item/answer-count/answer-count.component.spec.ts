import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerCountComponent } from './answer-count.component';

describe('AnswerCountComponent', () => {
  let component: AnswerCountComponent;
  let fixture: ComponentFixture<AnswerCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnswerCountComponent]
    });
    fixture = TestBed.createComponent(AnswerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
