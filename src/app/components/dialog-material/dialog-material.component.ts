import { Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog-material',
  templateUrl: './dialog-material.component.html',
  styleUrls: ['./dialog-material.component.css'],
})


export class DialogMaterialComponent {

  textListForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogMaterialComponent>,private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: string) {
      this.createForm();
  }

  createForm() {
    const regexText = '^[a-zA-Z]+$';

    this.textListForm = this.fb.group({
      text: ['', [Validators.required, Validators.pattern(regexText)]],
    });
  }

  closeDialog(confirm?: boolean): void {
    if (confirm) {
      this.dialogRef.close(confirm);
    }
    this.dialogRef.close(confirm);
  }
}
