import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // this.product = this.productsService.getProduct(id);
      this.fetchProduct(id)
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product
      })
  }

  createProduct(){
    const newProduct: Product = {
      id: '222',
      title: 'Desde Angular',
      image: 'assets/images/banner-1.jpg',
      price: 30000,
      description: 'description'
    }
    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product)
    })
  }

  updateProduct(){
    const updatedProduct: Partial<Product> = {
      price: 555,
      description: 'description diferente'
    }
    this.productsService.updateProduct('2',updatedProduct)
    .subscribe(product => {
      console.log(product)
    })
  }

  deleteProduct(){
    this.productsService.deleteProduct('4')
      .subscribe(product => {
        this.product = product
      })
  }

}
