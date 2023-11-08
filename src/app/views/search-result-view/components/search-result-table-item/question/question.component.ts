import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { IQuestion } from "@core/interfaces/interfaces";
import { DecodeHtmlPipe } from "@shared/pipes/decode-html/decode-html.pipe";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, DecodeHtmlPipe],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input() question!: IQuestion;

  public title: string = '';
  public questionId: number = 0;

  constructor(private _router: Router) {
  }

  ngOnInit() {
    const { title, question_id } = this.question;
    this.title = title;
    this.questionId = question_id;
  }

  getQuestion(questionId: number): void {
    this._router.navigate(['question'], { queryParams: { q: questionId } });
  }
}
