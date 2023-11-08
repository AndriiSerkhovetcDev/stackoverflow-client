import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { DecodeHtmlPipe } from "../../../../../shared/pipes/decode-html/decode-html.pipe";
import { QuickViewService } from "../../../../../core/services/search-view/quick-view.service";
import { DestroyObsService } from "../../../../../core/services/destroy-obs/destroy-obs.service";
import { ModalService } from "../../../../../core/services/modal/modal.service";
import { catchError, takeUntil, throwError } from "rxjs";
import { IParsedSearchData } from "../../../../../core/interfaces/interfaces";
@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule, MatButtonModule, DecodeHtmlPipe],
  providers: [ModalService],
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input() tags: string[] = [];

  constructor(
    private _searchViewService: QuickViewService,
    private _destroy$: DestroyObsService,
    private _modalService: ModalService
    ) {}

  public showMostPopularQuestionsByTag(tag: string): void {
   this._searchViewService.getPopularQuestionsByTags(tag).pipe(
     catchError((err) => throwError(err)),
     takeUntil(this._destroy$)
   ).subscribe((data: IParsedSearchData[]) => {
     if (data) {
       this._modalService.openModal(data);
     }
   })
  }
}
