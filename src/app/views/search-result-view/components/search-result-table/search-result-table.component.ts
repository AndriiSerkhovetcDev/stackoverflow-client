import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { DecodeHtmlPipe } from "@shared/pipes/decode-html/decode-html.pipe";
import { MatButtonModule } from "@angular/material/button";
import { TagComponent } from "../search-result-table-item/tag/tag.component";
import { AnswerCountComponent } from "../search-result-table-item/answer-count/answer-count.component";
import { AnswerOwnerComponent } from "../search-result-table-item/answer-owner/answer-owner.component";
import { QuestionComponent } from "../search-result-table-item/question/question.component";
import { IParsedSearchData } from "@core/interfaces/interfaces";

@Component({
  selector: 'app-search-result-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    DecodeHtmlPipe,
    MatButtonModule,
    TagComponent,
    AnswerCountComponent,
    AnswerOwnerComponent,
    QuestionComponent
  ],
  templateUrl: './search-result-table.component.html',
  styleUrls: ['./search-result-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultTableComponent implements AfterViewInit {
  @Input() set tableData(data: IParsedSearchData[]) {
    if (!data.length) return;

    this.dataSource.data = data;
    this.displayedColumns = Object.keys(data[0]);
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public displayedColumns: string[] = [];
  public dataSource = new MatTableDataSource<IParsedSearchData>();

  ngAfterViewInit(): void {
    if (this.dataSource.data.length) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
