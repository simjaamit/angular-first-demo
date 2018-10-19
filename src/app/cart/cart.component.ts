import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../services/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem : Item[] = [];
  constructor(private _itemservice :ItemService) { }

  getCartItem() : void{
    this.cartItem = this._itemservice.getSelectedItems();
  }

  ngOnInit() : void 
  {
    this.getCartItem();
  }

  

}