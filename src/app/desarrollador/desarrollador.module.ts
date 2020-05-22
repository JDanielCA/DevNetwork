import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesarrolladorPageRoutingModule } from './desarrollador-routing.module';

import { DesarrolladorPage } from './desarrollador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesarrolladorPageRoutingModule
  ],
  declarations: [DesarrolladorPage]
})
export class DesarrolladorPageModule {}
