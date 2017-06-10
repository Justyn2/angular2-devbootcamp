import { Component, OnInit, Input } from '@angular/core';
export interface IItem{
title:string;
price:number;
}

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.css']
})
export class ItemTileComponent implements OnInit {
  @Input() public item:IItem;
  constructor() { }

  ngOnInit() {
  }

}
