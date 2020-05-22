import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesarrolladorPage } from './desarrollador.page';

const routes: Routes = [
  {
    path: '',
    component: DesarrolladorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesarrolladorPageRoutingModule {}
