import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-search-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SearchBarComponent],
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent {

}
