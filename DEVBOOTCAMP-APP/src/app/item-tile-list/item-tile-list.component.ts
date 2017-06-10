import { Component, OnInit, Input } from '@angular/core';
import {IItem} from '../item-tile/item-tile.component';

@Component({
  selector: 'app-item-tile-list',
  templateUrl: './item-tile-list.component.html',
  styleUrls: ['./item-tile-list.component.css']
})
export class ItemTileListComponent implements OnInit {
  @Input() public title:string;
  @Input() public items:IItem[];
  constructor() { }

  ngOnInit() {
  }

}
