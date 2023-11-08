import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DestroyObsService } from "@core/services/destroy-obs/destroy-obs.service";
import { QuickTableViewComponent } from "@views/quick-table-view/quick-table-view.component";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { IAnswerOwner, IParsedSearchData } from "@core/interfaces/interfaces";
import { DecodeHtmlPipe } from "@shared/pipes/decode-html/decode-html.pipe";
import { QuickViewService } from "@core/services/search-view/quick-view.service";
import { catchError, takeUntil, throwError } from "rxjs";
import { ModalService } from "@core/services/modal/modal.service";

@Component({
  selector: 'app-answer-owner',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, MatDialogModule, QuickTableViewComponent, DecodeHtmlPipe],
  providers: [ModalService],
  templateUrl: './answer-owner.component.html',
  styleUrls: ['./answer-owner.component.scss']
})
export class AnswerOwnerComponent {
  @Input() answerOwner!: IAnswerOwner;

  constructor(
    private _dialog: MatDialog,
    private _destroy$: DestroyObsService,
    private _searchViewService: QuickViewService,
    private _modalService: ModalService) {
  }

  public showMostPopularAuthorAnswer(user_id: number): void {
    this._searchViewService.getMostPopularAuthorAnswer(user_id).pipe(
      catchError((err) => throwError(err)),
      takeUntil(this._destroy$)
    ).subscribe((data: IParsedSearchData[]) => {
      if (data) {
        this._modalService.openModal(data);
      }
    })
  }
}
