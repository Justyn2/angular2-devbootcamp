import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemTileComponent } from './item-tile/item-tile.component';
import { ItemTileListComponent } from './item-tile-list/item-tile-list.component';
import { TagComponent } from './tag/tag.component';
import { TagListComponent } from './tag-list/tag-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemTileComponent,
    ItemTileListComponent,
    TagComponent,
    TagListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
