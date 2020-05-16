
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { RouterGo } from 'ngrx-router';
import { Store } from '@ngrx/store';

import { TextListState } from '@app/store/state/list.state';
import { AppState } from '@app/store/state/app.state';
import { selectTextList } from '@app/store/selectors/list.selectors';
import { AddItem, EditItem, DeleteItem } from '@app/store/actions/list.actions';

import { DialogMaterialComponent } from '@app/components/dialog-material/dialog-material.component';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})

export class ListItemsComponent implements OnInit {
  textList: Array<string> = [];
  textListForm: FormGroup;
  textListState$: Observable<TextListState>;

  constructor(
    public dialogEditItem: MatDialog,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.textListState$ = this.store.select(selectTextList);
  }

  ngOnInit(): void {
    this.createForm();
    this.getTextListState();
  }

  createForm() {
    const regexText = '^[a-zA-Z]+$';

    this.textListForm = this.fb.group({
      text: ['', [Validators.required, Validators.pattern(regexText)]],
    });
  }

  getTextListState(){
    this.textListState$.subscribe((result) => {
      this.textList = result.list;
    });
  }


  addItem(text: string): void {
    this.store.dispatch(new AddItem(text));
  }

  editItem(position: number): void {
    const dialogRef = this.dialogEditItem.open(DialogMaterialComponent, {
      data: 'edit',
    });

    dialogRef.afterClosed().subscribe((newText: string): void => {
      if (newText) {
        this.store.dispatch(
          new EditItem( newText , position )
        );
      }
    });
  }
  deleteItem(position: number): void {
    const dialogRef = this.dialogEditItem.open(DialogMaterialComponent, {
      data: 'delete',
    });

    dialogRef.afterClosed().subscribe((resp: boolean): void => {
      if (resp) {
        this.store.dispatch(
          new DeleteItem(position)
        );
      }
    });
  }



  moveItem(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.textList, event.previousIndex, event.currentIndex);
  }

  routerGo(selectText: string) {
    this.store.dispatch(
      new RouterGo({
        path: [`prueba-rutas-redux/${selectText}`],
      })
    );
  }
}
