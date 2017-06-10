import { Component, OnInit, Input } from '@angular/core';

export interface ITag
{title:string;
}

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input() public tag:ITag;
  constructor() { }

  ngOnInit() {
  }

}
