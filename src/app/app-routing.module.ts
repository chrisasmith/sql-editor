import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SqlPadComponent} from './sql-pad/sql-pad.component';


const routes: Routes = [
  {
    path: '',
    component: SqlPadComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
