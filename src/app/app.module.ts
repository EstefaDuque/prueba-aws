import { ListEffects } from './store/effects/list.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment.prod';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/reducers/app.reducers';
import { StoreModule } from '@ngrx/store';
import { RouterEffects } from 'ngrx-router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogMaterialComponent } from './components/dialog-material/dialog-material.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PruebaRutasReduxComponent } from './components/prueba-rutas-redux/prueba-rutas-redux.component';

@NgModule({
  declarations: [AppComponent, DialogMaterialComponent, ListItemsComponent, PruebaRutasReduxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([RouterEffects, ListEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogMaterialComponent],
})
export class AppModule {}
