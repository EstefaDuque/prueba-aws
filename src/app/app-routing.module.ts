import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaRutasReduxComponent } from '@app/components/prueba-rutas-redux/prueba-rutas-redux.component';
import { ListItemsComponent } from '@app/components/list-items/list-items.component';


const routes: Routes = [
  {path: '', component: ListItemsComponent },
  {path: 'prueba-rutas-redux/:text', component: PruebaRutasReduxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
