import { Component, OnInit, Input } from '@angular/core';
import { ITag } from '../tag/tag.component'

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  @Input() public tags:ITag[];
  constructor() { }

  ngOnInit() {
  }

}
