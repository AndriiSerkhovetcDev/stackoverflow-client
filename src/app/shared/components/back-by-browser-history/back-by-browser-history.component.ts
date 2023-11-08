import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-back-by-browser-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-by-browser-history.component.html',
  styleUrls: ['./back-by-browser-history.component.scss']
})
export class BackByBrowserHistoryComponent {
  private _location = inject(Location);


  goBack() {
    this._location.back();
  }
}
