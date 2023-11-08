import { Component } from '@angular/core';
import { CommonModule, Location, NgOptimizedImage } from '@angular/common';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { Router, RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SearchBarComponent, RouterOutlet, RouterLink],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss']
})
export class SearchViewComponent {

  constructor( private _router: Router, private _location: Location) {}
  public onSearch(searchValue: string): void {
    this._router.navigate(['result'], { queryParams: { q: searchValue } });
  }

}
