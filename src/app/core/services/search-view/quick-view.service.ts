import { Injectable } from '@angular/core';
import { SearchResultService } from "../search-result/search-result.service";
import { BehaviorSubject, map, Observable } from "rxjs";
import { IParsedSearchData, ISearchResult } from "../../interfaces/interfaces";
import { DestroyObsService } from "../destroy-obs/destroy-obs.service";
import { HttpClient } from "@angular/common/http";
import { MatDialogRef } from "@angular/material/dialog";
import { QuickTableViewComponent } from "@views/quick-table-view/quick-table-view.component";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class QuickViewService  {
  private _api = environment.apiUrl;
  private _dialogRef = new BehaviorSubject<MatDialogRef<QuickTableViewComponent> | null>(null);

  constructor(
    private _searchService: SearchResultService,
    private _destroy$: DestroyObsService,
    private _http: HttpClient) { }

  public getMostPopularAuthorAnswer(user_id: number): Observable<IParsedSearchData[]> {
    const api = `${this._api}users/${user_id}/questions?order=desc&sort=votes&site=stackoverflow`;
    return this._http.get<ISearchResult>(api).pipe(
      map((data: ISearchResult) => this._searchService.parseResult(data.items))
    )
  }

  public getPopularQuestionsByTags(tag: string): Observable<IParsedSearchData[]> {
    const api = `${this._api}search?order=desc&sort=votes&tagged=${encodeURIComponent(tag)}&site=stackoverflow`
    return this._http.get<ISearchResult>(api).pipe(
      map((data: ISearchResult) => this._searchService.parseResult(data.items))
    )
  }

  public setDialogRef(dialogRef: MatDialogRef<QuickTableViewComponent>| null): void {
    this._dialogRef.next(dialogRef);
  }

  public getDialogRef(): MatDialogRef<QuickTableViewComponent> | null {
    return this._dialogRef.getValue();
  }
}
