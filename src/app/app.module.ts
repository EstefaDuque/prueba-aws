import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogMaterialComponent } from "./components/dialog-material/dialog-material.component";
import { ListItemsComponent } from "./components/list-items/list-items.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, DialogMaterialComponent, ListItemsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogMaterialComponent],
})
export class AppModule {}
