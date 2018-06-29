import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { StateMapComponent } from './state-map.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    StateMapComponent
  ],
  exports: [
    StateMapComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})

export class StateMapModule {}
