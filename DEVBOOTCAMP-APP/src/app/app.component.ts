import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'An Angular App';
  items = [{price:Math.floor(Math.random()*100.00) , title:'Item# '+ Math.floor(Math.random()*1000), tags:[{title:'onetag'},{title:'twotag'}] }, ]; ;
  featuredItems = [{price:Math.floor(Math.random()*100.00) , title:'Item# '+ Math.floor(Math.random()*1000), tags:[{title:'anothertag'},{title:'tag'}] }, ];;
}
