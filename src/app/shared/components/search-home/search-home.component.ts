import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { BehaviorSubject } from "rxjs";
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-search-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SearchBarComponent, RouterOutlet],
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent {
  private _router = inject(Router);
  constructor() {}
  public onSearch(searchValue: string): void {
    const url =  this._router.navigate(['result'], { queryParams: { q: searchValue } });
    console.log(url)
  }
}
