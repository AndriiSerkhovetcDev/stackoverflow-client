import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api } from "../../enums/api";
import { map, Observable } from "rxjs";
import { IParsedSearchData, ISearchResult, ISearchResultItem } from "../../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
  private _http = inject(HttpClient);
  private _api = Api.apiUrl;

  public getSearchResult(query: string): Observable<IParsedSearchData[]> {
    const api = `${this._api}search?pagesize=100&order=desc&sort=votes&intitle=${encodeURIComponent(query)}&site=stackoverflow`;

    return this._http.get<ISearchResult>(api).pipe(
      map((data: ISearchResult) => this.parseResult(data.items))
    )
  }

  public getQuestionAnswers(questionId: number): Observable<ISearchResultItem[]> {
    const api = `${this._api}questions/${questionId}/answers?order=desc&sort=votes&site=stackoverflow&filter=withbody`
    return this._http.get<ISearchResult>(api).pipe(
      map((data: ISearchResult) => data.items)
    );
  }

  public getQuestion(questionId: number): Observable<ISearchResultItem[]> {
    const api = `${this._api}questions/${questionId}?order=desc&sort=activity&site=stackoverflow&filter=withbody`
    return this._http.get<ISearchResult>(api).pipe(
      map((data: ISearchResult) => data.items)
    );
  }

  public parseResult(data: ISearchResultItem[]): IParsedSearchData[] {
    if (!data) return [];

    const filteredArray: IParsedSearchData[] = [];

    data.forEach((item: ISearchResultItem) => {
      filteredArray.push({
        owner: item.owner,
        question: {
          title: item.title,
          question_id: item.question_id
        },
        count: {
          answer_count: item.answer_count,
          question_id: item.question_id
        },
        tags: item.tags,
      })
    })

    return filteredArray;
  }
}
