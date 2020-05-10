import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";

@Component({
  selector: "app-dialog-material",
  templateUrl: "./dialog-material.component.html",
  styleUrls: ["./dialog-material.component.css"],
})
export class DialogMaterialComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  closeDialog(resp?: boolean): void {
    if (resp) {
      this.dialogRef.close(resp);
    }
    this.dialogRef.close(resp);
  }
}
