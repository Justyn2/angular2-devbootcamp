import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {
  public tagInput = new FormControl();
  public text:string='';
  public edit:boolean = false;
  @Output() public add = new EventEmitter();

  constructor() {
    this.tagInput.valueChanges.subscribe(value => {this.text = value});
  }
  ngOnInit() {
  }
  public onClick(){
    this.edit = !this.edit;
  }
  public onBlur(){
    this.edit = false;
  }
  public onAdd(){
  if (this.text && this.text !== '') {
  this.add.next(this.text)
  this.text='';
  }
  }
  public onCancel(){
  this.edit = false;
  this.text = '';
  }
}
