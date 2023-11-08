import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { QuickTableViewComponent } from "../../../views/quick-table-view/quick-table-view.component";
import { IParsedSearchData } from "../../interfaces/interfaces";
import { QuickViewService } from "../search-view/quick-view.service";

@Injectable({
  providedIn: 'root',
})
export class ModalService  {
  private _dialogRef: MatDialogRef<QuickTableViewComponent> | null = null;
  constructor(private _dialog: MatDialog, private _searchViewService: QuickViewService) {}

  public openModal(data: IParsedSearchData[]) {
    if (!data) return;

    const dialogRef = this._searchViewService.getDialogRef();

    if (!dialogRef) {
      this._dialogRef = this._dialog.open(QuickTableViewComponent, { data });
      this._searchViewService.setDialogRef(this._dialogRef);
    } else {
      this._dialogRef = dialogRef;
      this._dialogRef.componentInstance.setData(data);
    }

    this._dialogRef.afterClosed().subscribe(() => {
      this._searchViewService.setDialogRef(null);
    });
  }

}
