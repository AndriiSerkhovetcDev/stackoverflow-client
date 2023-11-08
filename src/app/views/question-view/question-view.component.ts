import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { DestroyObsService } from "@core/services/destroy-obs/destroy-obs.service";
import { SearchResultService } from "@core/services/search-result/search-result.service";
import { BehaviorSubject, catchError, combineLatestWith, takeUntil, tap, throwError } from "rxjs";
import { TagComponent } from "../search-result-view/components/search-result-table-item/tag/tag.component";
import { AnswerOwnerComponent } from "../search-result-view/components/search-result-table-item/answer-owner/answer-owner.component";
import { DecodeHtmlPipe } from "@shared/pipes/decode-html/decode-html.pipe";
import { BackByBrowserHistoryComponent } from "@shared/components/back-by-browser-history/back-by-browser-history.component";
import { ISearchResultItem } from "@core/interfaces/interfaces";

@Component({
  selector: 'app-question-view',
  standalone: true,
  imports: [CommonModule, TagComponent, AnswerOwnerComponent, DecodeHtmlPipe, BackByBrowserHistoryComponent],
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent implements OnInit {
  private _questionId: number = 0;

  public question$ = new BehaviorSubject<ISearchResultItem[] | null>(null);
  public answers$= new BehaviorSubject<ISearchResultItem[] | null>(null);

  constructor(
    private _activeRoute: ActivatedRoute,
    private _destroy$: DestroyObsService,
    private _searchService: SearchResultService) {
  }
  ngOnInit() {
    this._activeRoute.queryParams.subscribe((params) => {
      this._questionId = params['q'];
    })

    if (this._questionId) {
      this._searchService.getQuestion(this._questionId).pipe(
        combineLatestWith(this._searchService.getQuestionAnswers(this._questionId)),
        catchError((err) => throwError(err)),
        takeUntil(this._destroy$),
        tap(([question, answers]) => {
          this.question$.next(question)
          this.answers$.next(answers);
        })
      ).subscribe()
    }
  }
}
