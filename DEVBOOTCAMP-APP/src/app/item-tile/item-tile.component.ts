import { Component, OnInit, Input } from '@angular/core';
import { ITag } from '../tag/tag.component';
export interface IItem{
title:string;
price:number;
tags:ITag[];
}

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.css']
})
export class ItemTileComponent implements OnInit {
  @Input() public item:IItem;
  onAddTag(title){
  this.item.tags.push({title});
  }
  constructor() { }

  ngOnInit() {
  }

}
