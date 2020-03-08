import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //Input product list = the product list passed to us
  @Input() productList: Product[];

  /**
   *  @output onProductSelecte - outputs the current 
   *          product whenever a new Product is selected
   */
  @Output() onProductSelected: EventEmitter<Product>;

  constructor() { }

  ngOnInit(): void {
  }

}
