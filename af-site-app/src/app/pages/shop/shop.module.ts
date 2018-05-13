import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { OneBoxModule } from '../../shared/layout/templates/one-box/one-box.module';

@NgModule({
  imports: [
    CommonModule,
    OneBoxModule
  ],
  declarations: [ShopComponent]
})
export class ShopModule { }
