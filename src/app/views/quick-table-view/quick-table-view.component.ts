import { Component, forwardRef, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { SearchResultTableComponent } from "../search-result-view/components/search-result-table/search-result-table.component";
import { BehaviorSubject } from "rxjs";
import { IParsedSearchData } from "../../core/interfaces/interfaces";

@Component({
  selector: 'app-quick-table-view',
  standalone: true,
  imports: [CommonModule, MatDialogModule,
    forwardRef(() => SearchResultTableComponent), SearchResultTableComponent],
  templateUrl: './quick-table-view.component.html',
  styleUrls: ['./quick-table-view.component.scss']
})
export class QuickTableViewComponent {
  public tableData$ = new BehaviorSubject<IParsedSearchData[] | null>(null);
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IParsedSearchData[]) {
    if (this.data) {
      this.tableData$.next(this.data);
    }
  }

  public setData(data: IParsedSearchData[]): void {
    this.tableData$.next(data);
  }

}
