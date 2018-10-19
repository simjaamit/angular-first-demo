import {Injectable} from '@angular/core';
import {Item} from './item';
import {ITEMS} from './mock-item';
import {CartComponent} from '../cart/cart.component'

@Injectable()

export class ItemService
{
 
 selectedItems : Item[] = [];
 getItems() : Item[]
 {
   return ITEMS;
 }

getSelectedItems() : Item[]
{
  return this.selectedItems;
}
 addItems(id:number) : void
 {
   let item = ITEMS.find(ob => ob.id === id);
   if(this.selectedItems.indexOf(item)<0)
   {
     this.selectedItems.push(item);
   }
 }
 addTotal(price: number)
 {
   let total = 0;
 }



}