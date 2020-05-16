import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({

  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    MatDialogModule
  ]

})
export class AngularMaterialModule { }
