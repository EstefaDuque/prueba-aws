import { DialogMaterialComponent } from "./../dialog-material/dialog-material.component";
import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-list-items",
  templateUrl: "./list-items.component.html",
  styleUrls: ["./list-items.component.css"],
})
export class ListItemsComponent implements OnInit {
  list: Array<string> = [];
  form: FormGroup;

  constructor(public dialogEditItem: MatDialog, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      text: ['', [Validators.required]],
    });
  }

  moveItem(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }

  addItem(text: string): void {
    this.list.push(text);
  }

  deleteItem(index: number): void {
    const dialogRef = this.dialogEditItem.open(DialogMaterialComponent, {
      width: "250px",
      data: "delete",
    });

    dialogRef.afterClosed().subscribe((resp: boolean): void => {
      if (resp) {
        this.list.splice(index, 1);
      }
    });
  }

  editItem(index: number): void {
    const dialogRef = this.dialogEditItem.open(DialogMaterialComponent, {
      width: "250px",
      data: "edit",
    });

    dialogRef.afterClosed().subscribe((newText: string): void => {
      if (typeof newText !== "undefined") {
        this.list.splice(index, 1, newText);
      }
    });
  }
}
