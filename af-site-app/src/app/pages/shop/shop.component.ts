import { Component, OnInit } from '@angular/core';

import { ProductInfo } from './product-info.data';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(
    private productInfo: ProductInfo
  ) { }

  ngOnInit() {
  }

}
