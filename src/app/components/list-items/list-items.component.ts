
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Angular Material
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DialogMaterialComponent } from './../dialog-material/dialog-material.component';
import { MatDialog} from '@angular/material/dialog';
//Ngrx
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { RouterGo } from 'ngrx-router';
import { selectList } from './../../store/selectors/list.selectors';
import { EditItem, AddItem, DeleteItem } from './../../store/actions/list.actions';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {

  list: Array<string> = [];
  form: FormGroup;
  getState$: Observable<any>;

  constructor(
    public dialogEditItem: MatDialog,
    private fb: FormBuilder,
    private store: Store<IAppState>
  ) {
    this.getState$ = this.store.select(selectList);

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      text: ['', [Validators.required]],
    });
    this.getState$.subscribe(result=>{
      this.list= result.list;
    });
  }

 
  addItem(text: string): void {
    this.store.dispatch(new AddItem({list:this.list,text}));
  }

  deleteItem(index: number): void {
    const dialogRef = this.dialogEditItem.open(DialogMaterialComponent, {
      width: '250px',
      data: 'delete',
    });

    dialogRef.afterClosed().subscribe((resp: boolean): void => {
      if (resp) {
        this.store.dispatch(new DeleteItem({list: this.list, position: index}));
      }
    });
  }

  editItem(index: number): void {
    const dialogRef = this.dialogEditItem.open(DialogMaterialComponent, {
      width: '250px',
      data: 'edit',
    });

    dialogRef.afterClosed().subscribe((newText: string): void => {
      if (typeof newText !== 'undefined') {
        this.store.dispatch(new EditItem({list: this.list, position: index, text: newText}));
      }
    });
  }

  moveItem(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }

  testGo(selectText: string) {
    this.store.dispatch(
      new RouterGo({
        path: [`prueba-rutas-redux/${selectText}`],
      })
    );
  }
}
