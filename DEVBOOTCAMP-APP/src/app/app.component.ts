import { Component, OnInit, Inject } from '@angular/core';
import { IItem } from './item-tile/item-tile.component';
import { ItemRepository, ItemRepositoryToken } from './item-repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'An Angular App';
  items :IItem[];
  featuredItems:IItem[]=[];
  constructor(@Inject(ItemRepositoryToken) todoRepository: ItemRepository){
  this.items = todoRepository.getItems();
  this.featuredItems = todoRepository.getFeaturedItems();
  }
  ngOnInit(){

  }
}
