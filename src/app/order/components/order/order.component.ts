import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$.pipe(map((products:[]) => {
      const distintos = [...new Set(products)];
      return distintos;
    }));
   }

  ngOnInit() {
  }

}
