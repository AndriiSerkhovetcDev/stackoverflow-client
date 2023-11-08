import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluralWordPipe } from "../../../../../shared/pipes/plural-word/plural-word.pipe";
import { IAnswer } from "../../../../../core/interfaces/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: 'app-answer-count',
  standalone: true,
  imports: [CommonModule, PluralWordPipe],
  templateUrl: './answer-count.component.html',
  styleUrls: ['./answer-count.component.scss']
})
export class AnswerCountComponent implements OnInit {
  @Input() answerData!: IAnswer;

  public count!: number;
  public questionId!: number;

  constructor(private _router: Router) {}

  ngOnInit() {
    const { answer_count, question_id } = this.answerData;
    this.count = answer_count;
    this.questionId = question_id;
  }

  goToAnswer(questionId: number): void {
    this._router.navigate(['question'], { queryParams: { q: questionId } });
  }
}
