import { Component, OnInit, Input } from '@angular/core';
import {IItem} from '../item-tile/item-tile.component';


@Component({
  selector: 'app-item-tile-list',
  templateUrl: './item-tile-list.component.html',
  styleUrls: ['./item-tile-list.component.css']
})
export class ItemTileListComponent implements OnInit {
  @Input() title:string;
  items:IItem[]=[{price:Math.floor(Math.random()*100.00) , title:'Item# '+ Math.floor(Math.random()*1000) }, ];
  constructor() { }

  ngOnInit() {
  }

}
