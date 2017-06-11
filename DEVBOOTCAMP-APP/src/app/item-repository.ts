import {InjectionToken} from "@angular/core";
import { IItem } from "app/item-tile/item-tile.component";

export interface ItemRepository {
    getItems(): IItem[];
    getFeaturedItems(): IItem[];
}

export class InMemoryItemRepository implements ItemRepository{
    items: IItem[] =[];
    featuredItems: IItem[] =[];
    numberOfItems = Math.floor(Math.random()*100);
    public  getItems(): IItem[] {
    this.items = [];
    for(let i = 1; i<=this.numberOfItems; i++ ) {
      let item:IItem = {price:Math.floor(Math.random()*100.00), title:'Item# '+ i, tags:[{title:''}] };
      this.items.push(item);
     }
    return this.items;
    }
    getFeaturedItems(): IItem[] {
     this.featuredItems = [];
     for(let i = 0; i<this.numberOfItems; i++ ) {
     if(i%Math.floor(Math.random()*10) <=2){this.featuredItems.push(this.items[i]);}
     }
     return this.featuredItems;
    }
}

export const ItemRepositoryToken = new InjectionToken('ItemRepository');