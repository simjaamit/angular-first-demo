import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../services/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

storeItems : Item [] = [];
  constructor(private _itemservice : ItemService) {}
  getStoreItems() : void
  {
    this.storeItems = this._itemservice.getItems();
  }

  ngOnInit() : void {
  this.getStoreItems();
  }

addItemsInCart(id : number) : void
{
  this._itemservice.addItems(id);
}


}