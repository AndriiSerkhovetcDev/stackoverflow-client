import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { SearchResultService } from "../../core/services/search-result/search-result.service";
import { ActivatedRoute, Router } from "@angular/router";
import { BehaviorSubject, catchError, of, takeUntil, throwError } from "rxjs";
import { DestroyObsService } from "../../core/services/destroy-obs/destroy-obs.service";
import { SearchResultTableComponent } from "./components/search-result-table/search-result-table.component";
import { IParsedSearchData } from "../../core/interfaces/interfaces";
import { BackByBrowserHistoryComponent } from "../../shared/components/back-by-browser-history/back-by-browser-history.component";
import { fadeAnimation } from "../../shared/animation/animation";
@Component({
  selector: 'app-search-result-view',
  standalone: true,
  imports: [CommonModule, SearchResultTableComponent, BackByBrowserHistoryComponent],
  templateUrl: './search-result-view.component.html',
  styleUrls: ['./search-result-view.component.scss'],
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultViewComponent implements OnInit {
  private _searchQuery: string = '';

  public searchResult$ = new BehaviorSubject<IParsedSearchData[] | null>(null);

  constructor(
    private _activeRoute: ActivatedRoute,
    private _destroy$: DestroyObsService,
    private _router: Router,
    private _searchService: SearchResultService,
    private _location: Location) {}

  ngOnInit() {
    this._activeRoute.queryParams.subscribe((params) => {
      this._searchQuery = params['q'];
      this.getSearchResult(this._searchQuery)
    })
  }

  public getSearchResult(searchQuery: string): void {
    if (!searchQuery) return;

    this._searchService.getSearchResult(searchQuery).pipe(
      catchError((err: any) => {
        this.searchResult$.next([]);
        return throwError(err)
      }),
      takeUntil(this._destroy$)
    ).subscribe((result) => {
      this.searchResult$.next(result);
    })
  }
}
