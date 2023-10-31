import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Api } from "../../enums/api";

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
  private _http = inject(HttpClient);
  private _api = Api.apiUrl;

  public getSearchResult(query: string) {
    return this._http.get(`${this._api}search?pagesize=10&order=desc&sort=votes&intitle=${query}&site=stackoverflow`)
  }
}
