import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultService } from "../../../core/services/search-result/search-result.service";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, catchError, map, takeUntil, throwError } from "rxjs";
import { DestroyObsService } from "../../../core/services/destroy-obs/destroy-obs.service";

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  private _searchService = inject(SearchResultService);
  private _activeRoute = inject(ActivatedRoute);
  private _destroy$ = inject(DestroyObsService);
  private _searchQuery: string = '';

  public searchResult$ = new BehaviorSubject(null);

  ngOnInit() {
    this._searchQuery = this._activeRoute.snapshot.queryParams['q'];
    this.getSearchResult(this._searchQuery)
  }

  public getSearchResult(searchQuery: string): void {
    this._searchService.getSearchResult(searchQuery).pipe(
      map((data: any) => data.items),
      catchError((err: any) => throwError(err)),
      takeUntil(this._destroy$)
    ).subscribe((result: any) => {
      this.searchResult$.next(result);
    })
  }
}
