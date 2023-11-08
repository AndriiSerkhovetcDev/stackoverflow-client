import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _loading: boolean = false;
  constructor() { }

  public setLoading(loading: boolean) {
    this._loading = loading;
  }

  get loading(): boolean {
    return this._loading;
  }
}
