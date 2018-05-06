import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTablesComponent } from './demo-tables.component';
import { OneBoxModule } from '../../shared/layout/templates/one-box/one-box.module';
import { TableModule } from '../../shared/features/table/table.module'

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    OneBoxModule
  ],
  declarations: [DemoTablesComponent]
})
export class DemoTablesModule { }
